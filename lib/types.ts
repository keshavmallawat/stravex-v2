/**
 * Shared TypeScript types for the Stravex website.
 *
 * Single source of truth for all domain types used across
 * pages, components, and data files.
 *
 * Types are derived from the product architecture defined in
 * the strategy documents (Mission Domain / Technology Domain
 * dual-axis structure, three-level hierarchy).
 */

/* ── Technology Domains ────────────────────────────────────────── */

export type TechnologyDomain =
  "ai-ml" | "autonomous-systems" | "defence-electronics" | "detection-tracking";

export interface TechnologyDomainEntry {
  slug: TechnologyDomain;
  name: string;
  /** One-line summary for navigable index (DomainOverview section). */
  oneLiner: string;
  /** Full technical overview for deep-dive sections. */
  overview: string;
  /** Why this domain matters to the overall system. */
  significance: string;
  /** Where this technology is applied in Stravex products. */
  applications: string[];
  /** Directional roadmap — cautious, never overpromised. */
  roadmap: string;
}

/* ── Technologies Page Content ────────────────────────────────── */

/**
 * Thesis statement for the Technologies page hero.
 * How Stravex thinks about the stack as an integrated system.
 */
export interface ThesisContent {
  headline: string;
  body: string;
}

/**
 * Per-domain summary for the DomainOverview navigable index.
 * Lighter than a full TechnologyDomainEntry — name + one-liner + link.
 */
export interface DomainSummary {
  slug: TechnologyDomain;
  name: string;
  oneLiner: string;
}

/**
 * Validation entry — confirmed, disclosable recognition only.
 * Defence-specific: never fabricate or imply validation that doesn't exist.
 */
export interface ValidationEntry {
  type: "certification" | "trial" | "partnership" | "recognition";
  title: string;
  description: string;
  domain?: TechnologyDomain;
}

/**
 * Validation section content — page-level, not per-domain.
 */
export interface ValidationContent {
  heading: string;
  body: string;
  entries: ValidationEntry[];
}

/**
 * CTA section content — research-oriented engagement paths.
 */
export interface CTAContent {
  heading: string;
  body: string;
  paths: {
    label: string;
    href: string;
    description: string;
  }[];
}

/* ── Mission Domains ───────────────────────────────────────────── */

export type MissionDomain = "detection" | "interception" | "autonomy" | "electronics";

/* ── Products ──────────────────────────────────────────────────── */

export type MaturityStatus = "operational" | "in-development" | "prototype";

export type ProductHierarchyLevel = "system" | "subsystem" | "variant";

export interface Product {
  slug: string;
  name: string;
  description: string;
  missionDomain: MissionDomain;
  technologyDomains: TechnologyDomain[];
  maturityStatus: MaturityStatus;
  hierarchyLevel: ProductHierarchyLevel;
  parentSystem?: string; // slug of parent system if this is a subsystem/variant
  specifications?: Record<string, string>;
  relatedTechnologies: string[]; // slugs
  relatedProducts: string[]; // slugs
}

/* ── News ──────────────────────────────────────────────────────── */

export type NewsCategory = "press" | "research" | "announcements" | "events";

export interface NewsArticle {
  slug: string;
  title: string;
  date: string; // ISO 8601
  category: NewsCategory;
  excerpt: string;
  relatedProducts: string[]; // slugs
  relatedTechnologies: string[]; // slugs
}

/* ── Contact / Engagement ──────────────────────────────────────── */

export type InquiryCategory =
  "partnership" | "government-defence" | "press" | "careers" | "general";
