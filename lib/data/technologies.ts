/**
 * Technology domains data.
 *
 * Static data for the four core technology domains.
 * Used by:
 *  - Technologies listing page (Domain Overview, Domain Deep-Dives)
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

import type { TechnologyDomainEntry } from "../types";

export const technologyDomains: TechnologyDomainEntry[] = [
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    overview: "", // TODO: Fill in content phase
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "autonomous-systems",
    name: "Autonomous Systems",
    overview: "",
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "defence-electronics",
    name: "Defence Electronics",
    overview: "",
    significance: "",
    applications: [],
    roadmap: "",
  },
  {
    slug: "detection-tracking",
    name: "Detection & Tracking",
    overview: "",
    significance: "",
    applications: [],
    roadmap: "",
  },
];

/**
 * Helper: get a technology domain by slug.
 * Returns undefined if not found — callers should handle gracefully.
 */
export function getTechnologyBySlug(slug: string): TechnologyDomainEntry | undefined {
  return technologyDomains.find((d) => d.slug === slug);
}
