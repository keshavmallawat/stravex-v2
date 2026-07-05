import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "prose" | "full";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size" | "className" | "children">;

const sizeClasses: Record<ContainerSize, string> = {
  xs: "max-w-[var(--container-xs)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)]",
  sm: "max-w-[var(--container-sm)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)]",
  md: "max-w-[var(--container-md)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)]",
  lg: "max-w-[var(--container-lg)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)]",
  xl: "max-w-[var(--container-xl)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)] lg:px-[var(--space-container-x-lg)]",
  "2xl":
    "max-w-[var(--container-2xl)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)] lg:px-[var(--space-container-x-lg)]",
  prose:
    "max-w-[var(--container-prose)] mx-auto px-[var(--space-container-x)] md:px-[var(--space-container-x-md)]",
  full: "w-full px-[var(--space-container-x)] md:px-[var(--space-container-x-md)] lg:px-[var(--space-container-x-lg)]",
};

export function Container<T extends ElementType = "div">({
  as,
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
}
