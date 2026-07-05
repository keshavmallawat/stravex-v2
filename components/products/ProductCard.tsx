/**
 * Product Card component — used on the Products listing page (Section C).
 *
 * Responsibilities:
 * - Display product name, mission domain, maturity status, and description
 * - Maturity status is always visible (CONTENT_STRATEGY.md §10)
 * - Links to individual product detail page (/products/[slug])
 * - Medium information density — enough to support a filtering decision,
 *   full depth reserved for the detail page
 *
 * Data fields per card:
 *  - Product name
 *  - Mission Domain (primary categorisation)
 *  - Maturity status (Operational / In Development / Prototype)
 *  - One-line function description
 *
 * Design note: maturity status is expressed through a value/saturation
 * progression within a single neutral-to-signal hue family, not the
 * success/warning/error semantic triad (DESIGN_CONSTITUTION.md §4.8).
 */

import Link from "next/link";
import type { MaturityStatus } from "@/lib/types";

type ProductCardProps = {
  name: string;
  slug: string;
  missionDomain: string;
  maturityStatus: MaturityStatus;
  description: string;
};

const maturityLabels: Record<MaturityStatus, string> = {
  operational: "Operational",
  "in-development": "In Development",
  prototype: "Prototype",
};

const maturityColors: Record<MaturityStatus, string> = {
  operational: "text-[var(--status-operational)]",
  "in-development": "text-[var(--status-in-development)]",
  prototype: "text-[var(--text-muted)]",
};

export function ProductCard({
  name,
  slug,
  missionDomain,
  maturityStatus,
  description,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--accent-primary)]">
      <div className="mb-[var(--space-2)] flex items-center gap-[var(--space-3)]">
        <span className="font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
          {missionDomain}
        </span>
        <span
          className={`font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] ${maturityColors[maturityStatus]}`}
        >
          {maturityLabels[maturityStatus]}
        </span>
      </div>

      <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
        <Link
          href={`/products/${slug}`}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
        >
          {name}
        </Link>
      </h3>

      <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">{description}</p>

      <Link
        href={`/products/${slug}`}
        className="mt-[var(--space-3)] inline-block text-[var(--text-small-size)] text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
      >
        View system details &rarr;
      </Link>
    </article>
  );
}
