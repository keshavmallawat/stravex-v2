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
 *  5. Vision              — default spacing (deliberately quiet)
 *  6. CTA                 — spacious spacing (closing)
 *
 * Divider rhythm: default between all, lg before major density increases
 * (WhyNow → EngineeringPrinciples, Vision → CTA)
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
      <Divider />
      <WhyNow />
      <Divider spacing="lg" />
      <EngineeringPrinciples />
      <Divider />
      <Vision />
      <Divider spacing="lg" />
      <AboutCTA />
    </>
  );
}
