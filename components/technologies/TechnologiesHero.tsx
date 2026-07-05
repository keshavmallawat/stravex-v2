/**
 * TechnologiesHero — Technologies page, Section A (Hero).
 *
 * Statement of purpose. Establishes the system-level view
 * before any domain-specific content.
 *
 * Composition: Single-column, statement-first. No cards, no grids.
 * Typography carries the weight. Identical structural pattern to the
 * homepage HeroSection — justified because hero sections are the one
 * context where statement-first, single-column is consistently correct.
 *
 * Design Constitution §4.3: This is the deliberately emphasized section
 * on the Technologies page.
 * Design Constitution §4.7: Headlines are statements, not questions.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { thesis } from "@/lib/data/technologies";

export function TechnologiesHero() {
  return (
    <Section spacing="hero">
      <Container size="xl">
        <Stack gap="lg">
          <h1 className="max-w-[800px] text-[var(--text-h1-size)] leading-[var(--text-h1-leading)] text-[var(--text-primary)]">
            {thesis.headline}
          </h1>
          <p className="max-w-[640px] text-[var(--text-lead-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
            {thesis.body}
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
