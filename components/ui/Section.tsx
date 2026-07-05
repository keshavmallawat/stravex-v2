import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionSpacing = "flush" | "compact" | "default" | "spacious" | "hero";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  spacing?: SectionSpacing;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "spacing" | "className" | "children">;

const spacingClasses: Record<SectionSpacing, string> = {
  flush: "py-0",
  compact: "py-[var(--space-section-sm)]",
  default: "py-[var(--space-section-md)]",
  spacious: "py-[var(--space-section-lg)]",
  hero: "py-[var(--space-section-2xl)]",
};

export function Section<T extends ElementType = "section">({
  as,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as || "section";
  return (
    <Component className={cn(spacingClasses[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
