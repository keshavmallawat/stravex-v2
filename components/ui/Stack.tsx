import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  gap?: StackGap;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "gap" | "className" | "children">;

const gapClasses: Record<StackGap, string> = {
  xs: "gap-[var(--space-component-xs)]",
  sm: "gap-[var(--space-component-sm)]",
  md: "gap-[var(--space-component-md)]",
  lg: "gap-[var(--space-component-lg)]",
  xl: "gap-[var(--space-component-xl)]",
};

export function Stack<T extends ElementType = "div">({
  as,
  gap = "md",
  className,
  children,
  ...props
}: StackProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </Component>
  );
}
