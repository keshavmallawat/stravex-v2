import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type VisuallyHiddenProps = ComponentPropsWithoutRef<"span"> & {
  className?: string;
  children: React.ReactNode;
};

export function VisuallyHidden({ className, children, ...props }: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap",
        "[clip:rect(0,0,0,0)] [clip-path:inset(50%)]",
        "border-0",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
