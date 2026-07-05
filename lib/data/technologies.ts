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
    overview:
      "Stravex applies machine learning to classification, tracking, and decision support within the detection-to-response chain. Models are trained on domain-specific sensor data and validated against operationally representative scenarios. The focus is on measurable improvement in detection accuracy and response time — not on deploying ML where traditional signal processing already suffices.",
    significance:
      "ML-driven classification reduces false alarm rates and improves target identification in contested spectrum environments. In operational contexts, a lower false alarm rate directly reduces the cognitive load on operators and shortens the time from detection to response. This is a measurable engineering outcome, not an abstract capability claim.",
    applications: [
      "Radar target classification in multi-static sensor networks",
      "Multi-sensor data association and track fusion",
      "Anomaly detection in signal environments with high clutter",
      "Decision support for engagement sequencing under time constraints",
    ],
    roadmap:
      "Stravex is exploring improved classification models for specific threat profiles and reduced inference latency for edge deployment. Model validation methodology is being extended to include adversarial robustness testing under degraded sensor conditions.",
  },
  {
    slug: "autonomous-systems",
    name: "Autonomous Systems",
    oneLiner:
      "Navigation and decision-making under uncertainty with defined confidence boundaries.",
    overview:
      "Stravex develops autonomous capabilities for navigation, decision-making, and mission execution in communication-denied and GPS-denied environments. Autonomy is treated as an engineering constraint with defined confidence boundaries — not as an open-ended capability claim. Every autonomous function has a specified operational envelope and a degradation mode.",
    significance:
      "In operational environments, communication links are intermittent and GPS is unreliable or intentionally denied. Systems that depend on continuous connectivity or satellite navigation cannot maintain mission continuity under these conditions. Stravex's autonomous capabilities are designed to function within these constraints, providing operational continuity when external dependencies are unavailable.",
    applications: [
      "Autonomous path planning in GPS-denied environments",
      "Onboard decision-making for time-critical engagement sequences",
      "Multi-agent coordination with limited communication bandwidth",
      "Graceful degradation when sensor or compute subsystems are compromised",
    ],
    roadmap:
      "Stravex is exploring multi-agent coordination strategies and improved decision-making under uncertainty. Research priorities include formal verification of autonomous decision boundaries and worst-case performance characterization.",
  },
  {
    slug: "defence-electronics",
    name: "Defence Electronics",
    oneLiner:
      "Sensor systems, signal processing, and hardware engineering for operational conditions.",
    overview:
      "Stravex designs and builds sensor front-ends, signal processing pipelines, and ruggedized electronic systems for defence applications. Hardware is engineered for the size, weight, and power constraints of operational deployment — not for laboratory conditions. Real-time signal processing at the edge, without dependence on network connectivity, is a core design requirement.",
    significance:
      "Detection and tracking systems depend on the quality of the sensor front-end and the signal processing chain. Hardware-level decisions — sensor selection, analog front-end design, digitization strategy, and real-time processing architecture — directly determine system performance in the field. These decisions cannot be deferred to a software layer after deployment.",
    applications: [
      "Custom RF front-end design for multi-static radar systems",
      "Real-time digital signal processing for target detection and tracking",
      "Ruggedized electronics packaging for field deployment",
      "Sensor calibration and environmental compensation systems",
    ],
    roadmap:
      "Stravex is working on miniaturized sensor modules and improved power efficiency for extended deployment duration. Signal processing pipeline optimization for specific threat profiles is an ongoing engineering effort.",
  },
  {
    slug: "detection-tracking",
    name: "Detection & Tracking",
    oneLiner: "Radar, EO/IR, and multi-sensor fusion for persistent threat identification.",
    overview:
      "Stravex develops detection and tracking systems using radar, electro-optical/infrared (EO/IR) sensors, and multi-sensor fusion. The engineering focus is on persistent threat identification across range, terrain, and operational conditions — including cluttered environments, contested spectrum, and low-signature targets. Multi-sensor fusion combines complementary sensor modalities to improve detection reliability where any single sensor would be insufficient.",
    significance:
      "Detection is the first link in the response chain. A system that cannot detect and track threats with sufficient accuracy and range provides no basis for interception or autonomous response. The engineering challenge is maintaining detection performance across variable conditions — terrain clutter, atmospheric attenuation, target signature variability, and intentional countermeasures.",
    applications: [
      "Multi-static radar detection for low-altitude threat identification",
      "EO/IR tracking for supplementary target verification",
      "Multi-sensor fusion for improved detection probability in cluttered environments",
      "Persistent wide-area surveillance with handoff to precision tracking",
    ],
    roadmap:
      "Stravex is exploring improved multi-static radar techniques for reduced minimum detectable signature and enhanced EO/IR integration for all-weather tracking. Sensor fusion algorithm development is focused on maintaining track continuity during sensor transitions.",
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
