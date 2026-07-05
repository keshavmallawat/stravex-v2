/**
 * Products listing page.
 *
 * Purpose: Present operational capability in a way that feels like a
 * defence catalogue reviewed by a procurement officer — not a SaaS
 * pricing page.
 *
 * Section hierarchy (from info.md §3):
 *  A. ProductsHero — detect-and-intercept thesis
 *  B. PortfolioOverview — mission domain map
 *  C. ProductExplorer — filterable product index
 *  D. SystemsThinking — integration and lifecycle narrative
 *  E. ProductsCTA — 4 engagement paths
 *
 * Composition layer. All section logic lives in components/products/.
 * This file composes sections with intentional rhythm:
 *
 *  1. Hero              — hero spacing (deliberately emphasized)
 *  2. Portfolio Overview— compact spacing (quiet transition)
 *  3. Product Explorer  — spacious spacing (dense, interactive)
 *  4. Systems Thinking  — default spacing
 *  5. CTA               — spacious spacing (closing)
 *
 * Design Constitution §4.3: One deliberately emphasized section (Hero),
 * one deliberately quiet section (Portfolio Overview).
 * Design Constitution §4.23: Products page is denser than Technologies.
 */

import type { Metadata } from "next";
import { Divider } from "@/components/ui/Divider";
import { ProductsHero } from "@/components/products/ProductsHero";
import { PortfolioOverview } from "@/components/products/PortfolioOverview";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { SystemsThinking } from "@/components/products/SystemsThinking";
import { ProductsCTA } from "@/components/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Detection, interception, and autonomous response — each system engineered for operational conditions. Browse the Stravex product portfolio.",
  openGraph: {
    title: "Products | Stravex Technologies",
    description:
      "Detection, interception, and autonomous response — each system engineered for operational conditions.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <Divider />
      <PortfolioOverview />
      <Divider spacing="lg" />
      <ProductExplorer />
      <Divider />
      <SystemsThinking />
      <Divider />
      <ProductsCTA />
    </>
  );
}
