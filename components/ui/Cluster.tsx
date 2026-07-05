import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ClusterGap = "xs" | "sm" | "md" | "lg" | "xl";
type ClusterAlign = "start" | "center" | "end" | "stretch";
type ClusterJustify = "start" | "center" | "end" | "between";

type ClusterProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: ClusterGap;
  align?: ClusterAlign;
  justify?: ClusterJustify;
  wrap?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "gap" | "align" | "justify" | "wrap" | "className" | "children"
>;

const gapClasses: Record<ClusterGap, string> = {
  xs: "gap-[var(--space-component-xs)]",
  sm: "gap-[var(--space-component-sm)]",
  md: "gap-[var(--space-component-md)]",
  lg: "gap-[var(--space-component-lg)]",
  xl: "gap-[var(--space-component-xl)]",
};

const alignClasses: Record<ClusterAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses: Record<ClusterJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Cluster<T extends ElementType = "div">({
  as,
  gap = "sm",
  align = "start",
  justify = "start",
  wrap = true,
  className,
  children,
  ...props
}: ClusterProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={cn(
        "flex flex-row",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
