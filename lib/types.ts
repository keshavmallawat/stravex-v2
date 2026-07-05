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
  overview: string;
  significance: string;
  applications: string[];
  roadmap: string;
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
