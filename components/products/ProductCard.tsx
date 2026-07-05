/**
 * Product Card component — used on the Products listing page (Section B).
 *
 * Responsibilities:
 * - Display product function, mission fit, and maturity status
 * - Maturity status indicator is visible on every card (Design System Part 2, Section 9.1)
 * - Links to individual product detail page (/products/[slug])
 * - Medium information density — enough to support a filtering decision,
 *   full depth reserved for the detail page
 *
 * Data fields per card:
 *  - Product name
 *  - Mission Domain (primary categorisation)
 *  - Technology Domain (secondary categorisation)
 *  - Maturity status (Operational / In Development / Prototype)
 *  - One-line function description
 *
 * Built with eventual comparison tool in mind (data-consistent field
 * structure across products, even before a comparison UI exists).
 */

type ProductCardProps = {
  name: string;
  slug: string;
  missionDomain: string;
  technologyDomain: string;
  maturityStatus: "operational" | "in-development" | "prototype";
  description: string;
};

export function ProductCard(_props: ProductCardProps) {
  return (
    <article>
      {/* TODO: Card layout — name, domains, maturity badge, description, link to detail */}
    </article>
  );
}
