/**
 * About page data.
 *
 * Static data for the About page — the company narrative as an argument,
 * not a biography.
 *
 * Content is derived from the brand narrative in STRAVEX TECHNOLOGIES - info.md.
 * Every claim is either a stated intention or a verifiable fact.
 * No fabricated milestones, no fake statistics, no invented history.
 *
 * Content governance:
 *  - Maturity status must be honest — never imply more deployment
 *    reality than genuinely exists
 *  - Vision statements are aspirational, never framed as achieved
 *  - Engineering principles are operating commitments, not marketing
 */

import type {
  AboutThesis,
  WhyNowContent,
  EngineeringPrinciplesContent,
  VisionContent,
  AboutCTAContent,
} from "../types";

/* ── About Page — Hero Thesis ──────────────────────────────────── */

export const aboutThesis: AboutThesis = {
  headline:
    "Stravex exists to close the gap between the threats forces face today and the infrastructure available to counter them.",
  body: "Modern tactical threats — particularly low-cost, mass-deployable aerial systems — have outpaced the detection and interception infrastructure most forces still rely on. The asymmetry is structural. A threat that costs a few thousand dollars can force a response that costs orders of magnitude more. Worse, it can go undetected entirely until it is too late to matter. This is not a hypothetical problem. It is a currently unfolding shift in how tactical engagements happen.",
};

/* ── About Page — Why Now ──────────────────────────────────────── */

export const whyNowContent: WhyNowContent = {
  heading: "Why now",
  body: "Three forces are converging that make this moment urgent. A company built at this intersection — with genuine engineering depth rather than surface-level integration — has an opportunity to build infrastructure that matters for the next decade, not just the next contract cycle.",
  forces: [
    {
      title: "Low-cost aerial threat proliferation",
      description:
        "The barrier to deploying mass, low-cost aerial threats has dropped dramatically. Defence infrastructure built for a previous threat model — fewer, larger, slower-evolving — is proving insufficient at the pace this shift demands.",
    },
    {
      title: "AI/ML maturity for real-time decision-making",
      description:
        "Machine learning techniques for real-time detection, classification, and tracking have reached a level of maturity where they can be applied to mission-critical environments. This is no longer a research exercise. It is a deployable capability.",
    },
    {
      title: "National emphasis on indigenous defence capability",
      description:
        "India's strategic focus on indigenous defence engineering creates a direct path to building systems domestically. These systems are tuned to the specific operational conditions and doctrine of the forces that will use them. They are not adapted from a foreign system built for a different threat environment.",
    },
  ],
};

/* ── About Page — Engineering Principles ────────────────────────── */

export const engineeringPrinciplesContent: EngineeringPrinciplesContent = {
  heading: "How Stravex builds",
  body: "In this domain, the gap between a compelling demo and a deployable system is where most defence-tech companies fail. Stravex's philosophy is built around closing that deliberately: function before aesthetics, mission-readiness before feature count, and validation before claims.",
  principles: [
    {
      title: "Precision",
      description:
        "Accuracy is not a feature — it is the baseline condition for a system to be usable at all in this domain. No system ships, and no capability is claimed, until its performance under real conditions has been validated.",
    },
    {
      title: "Reliability",
      description:
        "A system that fails at the moment it is needed has no value, regardless of how sophisticated it is on paper. Design decisions favour robustness and graceful degradation over feature maximisation.",
    },
    {
      title: "Indigenous engineering",
      description:
        "Core detection, interception, and decision-making systems are architected and engineered in-house, tuned to the specific operational and doctrinal context they serve.",
    },
    {
      title: "Engineering rigor",
      description:
        "Every technical claim should survive scrutiny from someone more technical than the person reading the marketing page. Testing, validation, and iteration are core parts of the product — not a phase that happens before marketing begins.",
    },
    {
      title: "Mission readiness",
      description:
        "A system's value is defined entirely by how it performs in the operational environment it is built for — not by its technical elegance in isolation.",
    },
    {
      title: "Restraint",
      description:
        "In a category prone to overstatement, saying less — and being right about it — is the stronger signal. Internal claims about system capability are calibrated conservatively; the company would rather under-promise publicly than have a claim fail to hold up.",
    },
  ],
};

/* ── About Page — Vision ────────────────────────────────────────── */

export const visionContent: VisionContent = {
  heading: "Where this goes",
  body: "To become a trusted, long-term engineering partner to the forces and agencies that depend on advanced tactical detection and interception capability. Recognition comes first for the reliability of what Stravex builds, and only secondarily for how large the company has grown. This vision scales honestly: it remains true whether Stravex is 20 people or 2,000.",
};

/* ── About Page — CTA Content ──────────────────────────────────── */

export const aboutCTAContent: AboutCTAContent = {
  heading: "Continue the conversation",
  body: "Select the path that matches where you are in your evaluation of Stravex.",
  paths: [
    {
      label: "View open roles",
      href: "/team",
      description: "See the engineering culture and open positions at Stravex.",
    },
    {
      label: "Partner with us",
      href: "/contact?category=partnership",
      description: "For organisations exploring technical or strategic collaboration.",
    },
    {
      label: "Explore our technologies",
      href: "/technologies",
      description: "See the technical depth behind detection, interception, and autonomy.",
    },
  ],
};
