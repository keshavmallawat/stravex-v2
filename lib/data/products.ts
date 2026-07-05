/**
 * Products data.
 *
 * Static data for all products in the Stravex portfolio and
 * page-level content for the Products listing page.
 *
 * Used by:
 *  - Products listing page (Hero, Portfolio Overview, Explorer, Systems, CTA)
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

import type {
  Product,
  TechnologyDomain,
  ProductsThesis,
  MissionDomainSummary,
  SystemsContent,
  ProductsCTAContent,
} from "../types";

/* ── Products Page — Hero Thesis ──────────────────────────────── */

export const productsThesis: ProductsThesis = {
  headline:
    "Detection, interception, and autonomous response — each system engineered for operational conditions, not laboratory demonstrations.",
  body: "Stravex products are organised by mission need, not by technology showcase. Each system addresses a specific operational problem: identifying threats, tracking them through contested environments, and enabling response under real-world constraints. Specifications are available under technical briefing.",
};

/* ── Products Page — Mission Domain Map ───────────────────────── */

export const missionDomains: MissionDomainSummary[] = [
  {
    slug: "detection",
    name: "Detection",
    description: "Multi-sensor systems that identify and track threats across range and terrain.",
    problemStatement:
      "How do you maintain persistent threat awareness in cluttered terrain with contested spectrum?",
  },
  {
    slug: "interception",
    name: "Interception",
    description: "Response systems that close the loop from detection to engagement.",
    problemStatement:
      "How do you enable precise response within the time constraints of real operational scenarios?",
  },
  {
    slug: "autonomy",
    name: "Autonomous Systems",
    description:
      "Decision-making systems that operate under uncertainty with defined confidence boundaries.",
    problemStatement:
      "How do you maintain mission continuity when communications and GPS are degraded or denied?",
  },
  {
    slug: "electronics",
    name: "Electronics",
    description:
      "Sensor systems, signal processing, and hardware engineering for operational deployment.",
    problemStatement:
      "How do you engineer sensor systems for size, weight, and power constraints without sacrificing performance?",
  },
];

/* ── Products Page — Systems Thinking Content ─────────────────── */

export const systemsContent: SystemsContent = {
  heading: "Systems of systems",
  body: "Real operational value comes from integration. A detector without a response path is an alert system, not a defence system. Stravex products are designed to work together — from sensor to decision to response — as one coherent operational architecture.",
  principles: [
    {
      title: "Detection-to-interception integration",
      description:
        "Every detection system has a defined response path. Every interception system has a defined sensing dependency. The chain is designed as one system, not assembled from separate products.",
    },
    {
      title: "Graceful degradation",
      description:
        "Systems are designed to continue functioning under partial failure. Mission continuity is a design constraint, not an afterthought. Sensor loss, communication interruption, and compute degradation each have defined fallback behaviours.",
    },
    {
      title: "Lifecycle engineering",
      description:
        "Products are designed for iterative upgrade. Sensor modules, processing pipelines, and software layers can be updated independently — extending system capability without full-platform replacement.",
    },
  ],
};

/* ── Products Page — CTA Content ──────────────────────────────── */

export const productsCTAContent: ProductsCTAContent = {
  heading: "Engage with Stravex",
  body: "Every engagement begins with a technical conversation, not a sales pitch. Select the path that matches your role.",
  paths: [
    {
      label: "Request a Technical Briefing",
      href: "/contact?category=government-defence",
      description: "For procurement officers and defence organisations evaluating Stravex systems.",
    },
    {
      label: "Discuss Operational Requirements",
      href: "/contact?category=government-defence",
      description: "For defence organizations with specific operational constraints to discuss.",
    },
    {
      label: "Contact Engineering",
      href: "/contact?category=partnership",
      description: "For OEMs and integrators exploring technical collaboration.",
    },
    {
      label: "Partnership Enquiries",
      href: "/contact?category=partnership",
      description: "For strategic partners and investors evaluating the portfolio.",
    },
  ],
};

/* ── Products — Full Detail ───────────────────────────────────── */

export const products: Product[] = [
  {
    slug: "sentinel-array",
    name: "Sentinel Array",
    shortDescription: "Multi-static radar detection system for low-altitude threat identification.",
    description:
      "Sentinel Array is a multi-static radar detection system designed for low-altitude threat identification in cluttered terrain. The system uses distributed sensor nodes to maintain persistent surveillance across wide areas, with classification capabilities tuned for the specific threat profiles encountered in operational environments. Specifications beyond public-tier information are available under technical briefing.",
    missionDomain: "detection",
    technologyDomains: ["detection-tracking", "ai-ml", "defence-electronics"],
    maturityStatus: "in-development",
    hierarchyLevel: "system",
    deploymentContext:
      "Designed for deployment in terrain-cluttered environments with contested spectrum conditions. Sensor nodes are distributed across the operational area to provide multi-static coverage.",
    currentStatus:
      "Active engineering. System-level testing underway. Classification models validated against representative threat profiles.",
    roadmap:
      "Stravex is extending Sentinel Array's classification capabilities to additional threat profiles and exploring improved multi-static processing for reduced minimum detectable signature.",
    relatedTechnologies: ["detection-tracking", "ai-ml", "defence-electronics"],
    relatedProducts: [],
  },
];

/* ── Data Accessors ───────────────────────────────────────────── */

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
