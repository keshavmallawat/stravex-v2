"use client";

import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SkipLinkProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
  className?: string;
};

export function SkipLink({ href = "#main-content", className, children, ...props }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "fixed top-0 left-0 z-[var(--z-skip-link)]",
        "bg-[var(--interactive-primary)] text-[var(--interactive-primary-foreground)]",
        "px-[var(--space-4)] py-[var(--space-2)]",
        "text-[var(--text-body-size)] font-[var(--font-weight-medium)]",
        "rounded-b-[var(--radius-md)]",
        "-translate-y-full focus:translate-y-0",
        "transition-transform",
        className,
      )}
      {...props}
    >
      {children || "Skip to main content"}
    </a>
  );
}
