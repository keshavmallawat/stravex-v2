import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
type GridGap = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveColumns = GridColumns | { sm?: GridColumns; md?: GridColumns; lg?: GridColumns };

type GridProps<T extends ElementType = "div"> = {
  as?: T;
  columns?: ResponsiveColumns;
  gap?: GridGap;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "columns" | "gap" | "className" | "children">;

const columnsClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapClasses: Record<GridGap, string> = {
  xs: "gap-[var(--space-component-xs)]",
  sm: "gap-[var(--space-component-sm)]",
  md: "gap-[var(--space-component-md)]",
  lg: "gap-[var(--space-component-lg)]",
  xl: "gap-[var(--space-component-xl)]",
};

function resolveColumns(columns: ResponsiveColumns): string {
  if (typeof columns === "number") {
    return columnsClasses[columns];
  }

  const base = columns.sm ?? columns.md ?? columns.lg ?? 2;
  const md = columns.md ?? columns.lg ?? base;
  const lg = columns.lg ?? md;

  const classes: string[] = [columnsClasses[base]];
  if (md !== base) classes.push(`md:${columnsClasses[md].replace("grid-cols-", "md:grid-cols-")}`);
  if (lg !== md) classes.push(`lg:${columnsClasses[lg].replace("grid-cols-", "lg:grid-cols-")}`);

  return classes.join(" ");
}

export function Grid<T extends ElementType = "div">({
  as,
  columns = 3,
  gap = "md",
  className,
  children,
  ...props
}: GridProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={cn("grid", resolveColumns(columns), gapClasses[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
