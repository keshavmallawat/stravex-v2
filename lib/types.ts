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

/* ── Products Page Content ────────────────────────────────────── */

/**
 * Thesis statement for the Products page hero.
 * What unifies the product line — the detect-and-intercept thesis.
 */
export interface ProductsThesis {
  headline: string;
  body: string;
}

/**
 * Mission domain summary for the Portfolio Overview map.
 * Maps operational problems to product categories.
 */
export interface MissionDomainSummary {
  slug: MissionDomain;
  name: string;
  description: string;
  problemStatement: string;
}

/**
 * Systems thinking content — integration and lifecycle narrative.
 * How products work together as operational systems.
 */
export interface SystemsContent {
  heading: string;
  body: string;
  principles: {
    title: string;
    description: string;
  }[];
}

/**
 * Products CTA content — 4 engagement paths for different buyer types.
 */
export interface ProductsCTAContent {
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
  /** One-line function description — what it does, not how it works. */
  shortDescription: string;
  /** Full function description — what it does and why it matters. */
  description: string;
  /** Primary categorisation: what operational problem it solves. */
  missionDomain: MissionDomain;
  /** Secondary categorisation: what technology it uses. */
  technologyDomains: TechnologyDomain[];
  /** Always visible — never imply more maturity than genuinely exists. */
  maturityStatus: MaturityStatus;
  /** System → Subsystem → Variant hierarchy. */
  hierarchyLevel: ProductHierarchyLevel;
  /** Slug of parent system if this is a subsystem or variant. */
  parentSystem?: string;
  /** Operational context — where and how the system is deployed. */
  deploymentContext: string;
  /** Current engineering status — honest framing of where the product is. */
  currentStatus: string;
  /** Directional roadmap — cautious, never overpromised. */
  roadmap: string;
  /** Public-tier specifications. Restricted specs available under briefing. */
  specifications?: Record<string, string>;
  /** Links back to underlying technology domains. */
  relatedTechnologies: string[];
  /** Same Mission Domain siblings. */
  relatedProducts: string[];
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
