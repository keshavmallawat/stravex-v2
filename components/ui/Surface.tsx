import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SurfaceVariant =
  "transparent" | "primary" | "secondary" | "tertiary" | "elevated" | "interactive";

type SurfaceProps<T extends ElementType = "div"> = {
  as?: T;
  variant?: SurfaceVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "variant" | "className" | "children">;

const variantClasses: Record<SurfaceVariant, string> = {
  transparent: "bg-transparent",
  primary: "bg-[var(--surface-primary)]",
  secondary: "bg-[var(--surface-secondary)]",
  tertiary: "bg-[var(--surface-tertiary)]",
  elevated: "bg-[var(--bg-elevated)]",
  interactive: "bg-[var(--surface-primary)] hover:bg-[var(--surface-hover)] transition-colors",
};

export function Surface<T extends ElementType = "div">({
  as,
  variant = "primary",
  className,
  children,
  ...props
}: SurfaceProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
