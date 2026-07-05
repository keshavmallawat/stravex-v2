import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type DividerProps = ComponentPropsWithoutRef<"hr"> & {
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg";
};

const spacingClasses = {
  none: "my-0",
  sm: "my-[var(--space-4)]",
  md: "my-[var(--space-8)]",
  lg: "my-[var(--space-12)]",
} as const;

export function Divider({ className, spacing = "md", ...props }: DividerProps) {
  return (
    <hr
      role="separator"
      className={cn(
        "border-none border-t border-[var(--border-primary)]",
        spacingClasses[spacing],
        className,
      )}
      {...props}
    />
  );
}
