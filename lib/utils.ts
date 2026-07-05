/**
 * Utility function for merging Tailwind CSS classes.
 *
 * Uses clsx + tailwind-merge to conditionally compose class strings
 * without conflicts. Used by shadcn components and custom components alike.
 *
 * Example: cn("px-4 py-2", isActive && "bg-primary", className)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
