/**
 * Technology domains data.
 *
 * Static data for the four core technology domains and
 * page-level content for the Technologies listing page.
 *
 * Used by:
 *  - Technologies listing page (Hero, Domain Overview, Deep-Dives, Validation, CTA)
 *  - Individual technology detail pages (/technologies/[slug])
 *  - Product cards (Technology Domain filter options)
 *
 * Each entry maps to a route: /technologies/{slug}
 *
 * Content governance: All fields must be factual, falsifiable,
 * and free of unverified superlatives. Technical specificity
 * without classified overreach — describe approach and why it
 * matters, not implementation details.
 */

import type {
  TechnologyDomainEntry,
  ThesisContent,
  DomainSummary,
  ValidationContent,
  CTAContent,
} from "../types";

/* ── Technologies Page — Hero Thesis ──────────────────────────── */

export const thesis: ThesisContent = {
  headline:
    "Detection, tracking, autonomy, and intelligence — engineered as one integrated system, not four siloed capabilities.",
  body: "Stravex develops technology across the full sensing-to-response chain. Each domain reinforces the others: detection informs tracking, tracking enables autonomy, autonomy supports decision-making, and intelligence validates the entire loop. This integration is the core architectural principle.",
};

/* ── Technology Domains — Full Detail ─────────────────────────── */

export const technologyDomains: TechnologyDomainEntry[] = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    oneLiner:
      "Classification, tracking, and decision support applied where it measurably improves outcome.",
    overview: "", // TODO: Fill in content phase
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "autonomous-systems",
    name: "Autonomous Systems",
    oneLiner:
      "Navigation and decision-making under uncertainty with defined confidence boundaries.",
    overview: "", // TODO: Fill in content phase
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "defence-electronics",
    name: "Defence Electronics",
    oneLiner:
      "Sensor systems, signal processing, and hardware engineering for operational conditions.",
    overview: "", // TODO: Fill in content phase
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "detection-tracking",
    name: "Detection & Tracking",
    oneLiner: "Radar, EO/IR, and multi-sensor fusion for persistent threat identification.",
    overview: "", // TODO: Fill in content phase
    significance: "",
    applications: [],
    roadmap: "",
  },
];

/* ── Technologies Page — Domain Summaries (for navigable index) ─ */

/**
 * Derived from technologyDomains — single source of truth.
 * Avoids data duplication between summaries and full entries.
 */
export const domainSummaries: DomainSummary[] = technologyDomains.map(
  ({ slug, name, oneLiner }) => ({
    slug,
    name,
    oneLiner,
  }),
);

/* ── Technologies Page — Validation & Recognition ─────────────── */

export const validation: ValidationContent = {
  heading: "Validation & Recognition",
  body: "Engineering claims are validated through formal processes. The entries below represent confirmed, disclosable recognition — each tied to the domain it substantiates.",
  entries: [
    // TODO: Populate with confirmed, disclosable validation entries.
    // Each entry must be:
    //  - Confirmed by the relevant authority
    //  - Specific (named certification, named trial, named partnership)
    //  - Linked to the technology domain it substantiates
    //
    // Example entry (remove when real data exists):
    // {
    //   type: "certification",
    //   title: "Defence Electronics Quality Standard",
    //   description: "Certified under [standard] for sensor system manufacturing.",
    //   domain: "defence-electronics",
    // },
  ],
};

/* ── Technologies Page — CTA Content ──────────────────────────── */

export const ctaContent: CTAContent = {
  heading: "Contribute to the engineering",
  body: "Stravex hires engineers who want hard problems with real operational constraints. Research collaboration is open to institutions working in sensing, autonomy, and applied intelligence.",
  paths: [
    {
      label: "Explore Careers",
      href: "/contact?category=careers",
      description: "Engineering roles across sensing, autonomy, and systems.",
    },
    {
      label: "Research Collaboration",
      href: "/contact?category=partnership",
      description: "Joint research with academic and institutional partners.",
    },
  ],
};

/* ── Data Accessors ───────────────────────────────────────────── */

/**
 * Helper: get a technology domain by slug.
 * Returns undefined if not found — callers should handle gracefully.
 */
export function getTechnologyBySlug(slug: string): TechnologyDomainEntry | undefined {
  return technologyDomains.find((d) => d.slug === slug);
}
