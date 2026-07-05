/**
 * ProductsHero — Products page, Section A (Hero).
 *
 * Statement of purpose. Establishes the detect-and-intercept thesis
 * before any product-specific content.
 *
 * Composition: Single-column, statement-first. No cards, no grids.
 * Typography carries the weight. Identical structural pattern to the
 * Technologies hero — justified because hero sections are the one
 * context where statement-first, single-column is consistently correct.
 *
 * Design Constitution §4.3: This is the deliberately emphasized section
 * on the Products page.
 * Design Constitution §4.7: Headlines are statements, not questions.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { productsThesis } from "@/lib/data/products";

export function ProductsHero() {
  return (
    <Section spacing="hero">
      <Container size="prose">
        <Stack gap="lg">
          <span className="block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--accent-primary)]">
            Product Portfolio
          </span>
          <h1 className="text-[var(--text-h1-size)] leading-[var(--text-h1-leading)] text-[var(--text-primary)]">
            {productsThesis.headline}
          </h1>
          <p className="text-[var(--text-lead-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
            {productsThesis.body}
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
