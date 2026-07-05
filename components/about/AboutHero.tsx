/**
 * AboutHero — About page, Section A (Hero).
 *
 * Statement of purpose. The strategic problem Stravex exists to solve.
 * No company name in the headline — this is about the problem, not the brand.
 *
 * Composition: Single-column, statement-first. Identical structural pattern
 * to the Technologies and Products heroes — justified because hero sections
 * are the one context where statement-first, single-column is consistently correct.
 *
 * Design Constitution §4.3: This is the deliberately emphasized section
 * on the About page.
 * Design Constitution §4.7: Headlines are statements, not questions.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { aboutThesis } from "@/lib/data/about";

export function AboutHero() {
  return (
    <Section spacing="hero">
      <Container size="xl">
        <Stack gap="lg">
          <h1 className="max-w-[800px] text-[var(--text-h1-size)] leading-[var(--text-h1-leading)] text-[var(--text-primary)]">
            {aboutThesis.headline}
          </h1>
          <p className="max-w-[640px] text-[var(--text-lead-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
            {aboutThesis.body}
          </p>
        </Stack>
      </Container>
    </Section>
  );
}
