/**
 * Products data.
 *
 * Static data for all products in the Stravex portfolio.
 * Used by:
 *  - Products listing page (Product Index, filterable catalogue)
 *  - Individual product detail pages (/products/[slug])
 *  - Product cards and filter panel
 *
 * Product Architecture:
 *  - Dual-axis categorisation: Mission Domain × Technology Domain
 *  - Three-level hierarchy: System → Subsystem → Variant
 *  - Maturity status on every entry (Operational / In Development / Prototype)
 *
 * Content governance:
 *  - Maturity status must be honest — never imply more deployment
 *    reality than genuinely exists
 *  - Publish function and general capability; never publish specific
 *    performance figures, deployment locations, or customer identities
 *    without explicit clearance
 *  - Specifications marked as "restricted" are available under NDA/briefing
 */

import type { Product, TechnologyDomain } from "../types";

export const products: Product[] = [
  // TODO: Populate with real products in content phase
  // Example structure:
  // {
  //   slug: "sentinel-array",
  //   name: "Sentinel Array",
  //   description: "",
  //   missionDomain: "detection",
  //   technologyDomains: ["detection-tracking", "ai-ml"],
  //   maturityStatus: "in-development",
  //   hierarchyLevel: "system",
  //   specifications: {},
  //   relatedTechnologies: ["detection-tracking", "ai-ml"],
  //   relatedProducts: [],
  // },
];

/**
 * Helper: get a product by slug.
 * Returns undefined if not found — callers should handle gracefully.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Helper: filter products by Mission Domain.
 */
export function getProductsByMissionDomain(missionDomain: string): Product[] {
  return products.filter((p) => p.missionDomain === missionDomain);
}

/**
 * Helper: filter products by Technology Domain.
 */
export function getProductsByTechnologyDomain(techDomain: TechnologyDomain): Product[] {
  return products.filter((p) => p.technologyDomains.includes(techDomain));
}

/**
 * Helper: filter products by Maturity Status.
 */
export function getProductsByMaturity(status: string): Product[] {
  return products.filter((p) => p.maturityStatus === status);
}

/**
 * Helper: get sibling products (same Mission Domain, excluding self).
 */
export function getSiblingProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products.filter((p) => p.missionDomain === product.missionDomain && p.slug !== slug);
}
