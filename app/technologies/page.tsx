/**
 * Technologies listing page.
 *
 * Purpose: Demonstrate R&D depth and technical seriousness — aimed at
 * technical evaluators, engineers, and credibility-conscious partners
 * who want to see the underlying science.
 *
 * Section hierarchy (from info.md §4):
 *  A. TechnologiesHero — thesis statement (system-level view)
 *  B. DomainOverview — navigable index of four technology domains
 *  C. DomainDeepDive — per-domain structured blocks
 *  D. ValidationSection — certifications, trials, partnerships
 *  E. TechnologiesCTA — careers / research collaboration
 *
 * Composition layer. All section logic lives in components/technologies/.
 * This file composes sections with intentional rhythm:
 *
 *  1. Hero              — hero spacing (deliberately emphasized)
 *  2. Domain Overview   — compact spacing (quiet transition)
 *  3. Domain Deep-Dive  — spacious spacing (dense content)
 *  4. Validation        — default spacing
 *  5. CTA               — spacious spacing (closing)
 *
 * Design Constitution §4.3: One deliberately emphasized section (Hero),
 * one deliberately quiet section (Domain Overview).
 * Design Constitution §4.4: Density earns its place through substance.
 */

import type { Metadata } from "next";
import { Divider } from "@/components/ui/Divider";
import { TechnologiesHero } from "@/components/technologies/TechnologiesHero";
import { DomainOverview } from "@/components/technologies/DomainOverview";
import { DomainDeepDive } from "@/components/technologies/DomainDeepDive";
import { ValidationSection } from "@/components/technologies/ValidationSection";
import { TechnologiesCTA } from "@/components/technologies/TechnologiesCTA";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Detection, tracking, autonomy, and intelligence — engineered as one integrated system. Explore Stravex's core technology domains.",
  openGraph: {
    title: "Technologies | Stravex Technologies",
    description:
      "Detection, tracking, autonomy, and intelligence — engineered as one integrated system.",
  },
};

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <Divider />
      <DomainOverview />
      <Divider />
      <DomainDeepDive />
      <Divider />
      <ValidationSection />
      <Divider />
      <TechnologiesCTA />
    </>
  );
}
