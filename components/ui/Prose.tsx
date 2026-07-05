import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ProseProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  children: React.ReactNode;
};

/* ── Headings ───────────────────────────────────────────────────── */

const proseH1 =
  "[&_h1]:text-[var(--text-h1-size)] [&_h1]:font-[var(--text-h1-weight)] [&_h1]:leading-[var(--text-h1-leading)] [&_h1]:tracking-[var(--letter-spacing-tight)] [&_h1]:text-[var(--text-primary)] [&_h1]:mt-[var(--space-8)] [&_h1]:mb-[var(--space-4)] [&_h1:first-child]:mt-0 [&_h1:last-child]:mb-0";

const proseH2 =
  "[&_h2]:text-[var(--text-h2-size)] [&_h2]:font-[var(--text-h2-weight)] [&_h2]:leading-[var(--text-h2-leading)] [&_h2]:tracking-[var(--letter-spacing-tight)] [&_h2]:text-[var(--text-primary)] [&_h2]:mt-[var(--space-8)] [&_h2]:mb-[var(--space-4)] [&_h2:first-child]:mt-0 [&_h2:last-child]:mb-0";

const proseH3 =
  "[&_h3]:text-[var(--text-h3-size)] [&_h3]:font-[var(--text-h3-weight)] [&_h3]:leading-[var(--text-h3-leading)] [&_h3]:tracking-[var(--letter-spacing-tight)] [&_h3]:text-[var(--text-primary)] [&_h3]:mt-[var(--space-6)] [&_h3]:mb-[var(--space-3)] [&_h3:first-child]:mt-0 [&_h3:last-child]:mb-0";

const proseH4 =
  "[&_h4]:text-[var(--text-h4-size)] [&_h4]:font-[var(--text-h4-weight)] [&_h4]:leading-[var(--text-h4-leading)] [&_h4]:text-[var(--text-primary)] [&_h4]:mt-[var(--space-6)] [&_h4]:mb-[var(--space-3)] [&_h4:first-child]:mt-0 [&_h4:last-child]:mb-0";

const proseHeadings = [proseH1, proseH2, proseH3, proseH4].join(" ");

/* ── Paragraphs ─────────────────────────────────────────────────── */

const proseParagraphs =
  "[&_p]:text-[var(--text-body-size)] [&_p]:leading-[var(--text-body-leading)] [&_p]:text-[var(--text-secondary)] [&_p]:mb-[var(--space-4)] [&_p:last-child]:mb-0";

/* ── Lists ──────────────────────────────────────────────────────── */

const proseLists =
  "[&_ul]:pl-[var(--space-6)] [&_ul]:mb-[var(--space-4)] [&_ol]:pl-[var(--space-6)] [&_ol]:mb-[var(--space-4)]";

const proseListItems =
  "[&_li]:mb-[var(--space-1)] [&_li]:text-[var(--text-body-size)] [&_li]:leading-[var(--text-body-leading)] [&_li]:text-[var(--text-secondary)] [&_li:last-child]:mb-0";

/* ── Links ──────────────────────────────────────────────────────── */

const proseLinks =
  "[&_a]:text-[var(--text-primary)] [&_a]:underline [&_a]:decoration-[var(--border-strong)] [&_a]:underline-offset-[0.15em] [&_a:hover]:decoration-[var(--accent-primary)]";

/* ── Inline ─────────────────────────────────────────────────────── */

const proseInline =
  "[&_strong]:font-[var(--font-weight-semibold)] [&_strong]:text-[var(--text-primary)] [&_em]:italic";

/* ── Code ───────────────────────────────────────────────────────── */

const proseCode =
  "[&_code]:font-[var(--font-mono)] [&_code]:text-[var(--text-mono-size)] [&_code]:bg-[var(--surface-primary)] [&_code]:border [&_code]:border-[var(--border-primary)] [&_code]:rounded-[var(--radius-sm)] [&_code]:px-[0.125em] [&_code]:py-[0.375em]";

const prosePre =
  "[&_pre]:font-[var(--font-mono)] [&_pre]:text-[var(--text-mono-size)] [&_pre]:leading-[var(--text-mono-leading)] [&_pre]:bg-[var(--surface-primary)] [&_pre]:border [&_pre]:border-[var(--border-primary)] [&_pre]:rounded-[var(--radius-md)] [&_pre]:p-[var(--space-4)] [&_pre]:overflow-x-auto [&_pre]:mb-[var(--space-4)] [&_pre:last-child]:mb-0";

const prosePreCode =
  "[&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:p-0 [&_pre_code]:rounded-none";

/* ── Blockquote ─────────────────────────────────────────────────── */

const proseBlockquote =
  "[&_blockquote]:border-l-[3px] [&_blockquote]:border-[var(--accent-primary)] [&_blockquote]:pl-[var(--space-4)] [&_blockquote]:italic [&_blockquote]:text-[var(--text-secondary)] [&_blockquote]:my-[var(--space-4)] [&_blockquote:first-child]:mt-0 [&_blockquote:last-child]:mb-0";

/* ── Tables ─────────────────────────────────────────────────────── */

const proseTable =
  "[&_table]:w-full [&_table]:border-collapse [&_table]:mb-[var(--space-4)] [&_table:last-child]:mb-0";

const proseTableHeaders =
  "[&_th]:text-left [&_th]:font-[var(--font-weight-semibold)] [&_th]:text-[var(--text-small-size)] [&_th]:text-[var(--text-secondary)] [&_th]:border-b [&_th]:border-[var(--border-primary)] [&_th]:py-[var(--space-2)] [&_th]:px-[var(--space-3)]";

const proseTableCells =
  "[&_td]:border-b [&_td]:border-[var(--border-subtle)] [&_td]:py-[var(--space-2)] [&_td]:px-[var(--space-3)] [&_td]:text-[var(--text-body-size)] [&_td]:text-[var(--text-secondary)]";

/* ── Figures ────────────────────────────────────────────────────── */

const proseFigures =
  "[&_figure]:my-[var(--space-6)] [&_figure:first-child]:mt-0 [&_figure:last-child]:mb-0 [&_figcaption]:mt-[var(--space-2)] [&_figcaption]:text-[var(--text-small-size)] [&_figcaption]:text-[var(--text-tertiary)]";

/* ── Images ─────────────────────────────────────────────────────── */

const proseImages = "[&_img]:rounded-[var(--radius-md)] [&_img]:my-[var(--space-4)]";

/* ── Horizontal rule ────────────────────────────────────────────── */

const proseHr =
  "[&_hr]:border-none [&_hr]:border-t [&_hr]:border-[var(--border-primary)] [&_hr]:my-[var(--space-8)] [&_hr:first-child]:mt-0 [&_hr:last-child]:mb-0";

/* ── Composed class string ──────────────────────────────────────── */

const proseClasses = [
  "max-w-[var(--container-prose)]",
  proseHeadings,
  proseParagraphs,
  proseLists,
  proseListItems,
  proseLinks,
  proseInline,
  proseCode,
  prosePre,
  prosePreCode,
  proseBlockquote,
  proseTable,
  proseTableHeaders,
  proseTableCells,
  proseFigures,
  proseImages,
  proseHr,
].join(" ");

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div className={cn(proseClasses, className)} {...props}>
      {children}
    </div>
  );
}
