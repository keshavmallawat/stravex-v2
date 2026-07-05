/**
 * About page.
 *
 * Purpose: Convert interest into conviction — explain why Stravex exists
 * as an argument, not a biography.
 *
 * Section hierarchy (from info.md §2):
 *  A. AboutHero — strategic problem statement
 *  B. CompanyThesis — why current approaches fail, why Stravex matters
 *  C. WhyNow — three converging forces
 *  D. EngineeringPrinciples — six operating commitments
 *  E. Vision — where this goes (deliberately quiet)
 *  F. AboutCTA — three engagement paths
 *
 * Composition layer. All section logic lives in components/about/.
 * This file composes sections with intentional rhythm:
 *
 *  1. Hero                — hero spacing (deliberately emphasized)
 *  2. Company Thesis      — compact spacing (quiet transition)
 *  3. Why Now             — default spacing
 *  4. Engineering Principles — spacious spacing (dense, two-column)
 *  5. Vision              — compact spacing (deliberately quiet)
 *  6. CTA                 — spacious spacing (closing)
 *
 * Design Constitution §4.3: One deliberately emphasized section (Hero),
 * one deliberately quiet section (Vision).
 * Design Constitution §4.20: This is an argument, not a story.
 * Design Constitution §4.7: Every headline is a statement, never a question.
 */

import type { Metadata } from "next";
import { Divider } from "@/components/ui/Divider";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyThesis } from "@/components/about/CompanyThesis";
import { WhyNow } from "@/components/about/WhyNow";
import { EngineeringPrinciples } from "@/components/about/EngineeringPrinciples";
import { Vision } from "@/components/about/Vision";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Stravex exists, why now, and how we think about building tactical detection and interception systems. An argument, not a biography.",
  openGraph: {
    title: "About | Stravex Technologies",
    description:
      "Why Stravex exists, why now, and how we think about building tactical detection and interception systems.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Divider />
      <CompanyThesis />
      <Divider spacing="lg" />
      <WhyNow />
      <Divider />
      <EngineeringPrinciples />
      <Divider />
      <Vision />
      <Divider spacing="lg" />
      <AboutCTA />
    </>
  );
}
