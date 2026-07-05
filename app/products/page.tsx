/**
 * Products listing page.
 *
 * Purpose: Present operational capability in a way that feels like a
 * defence catalogue reviewed by a procurement officer — not a SaaS
 * pricing page.
 *
 * Section hierarchy (from strategy doc):
 *  A. Portfolio Overview — Mission Domain map/index
 *  B. Product Index — filterable card grid (by Mission Domain, Technology Domain, Maturity)
 *  C. Systems Thinking / Integration — products as integrated capabilities
 *  D. Engagement — 4 differentiated CTA paths
 *
 * This is the one page in the site where filtering is appropriate.
 * Product Detail lives on distinct routes, not in-page expansion.
 */

export default function ProductsPage() {
  return (
    <section>
      <h1>Products</h1>
      {/* TODO: Portfolio Overview, Product Index, Systems Thinking, CTA */}
    </section>
  );
}
