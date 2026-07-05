/**
 * Vision — About page, Section E.
 *
 * Where Stravex is headed — restrained, not grandiose.
 * The vision is aspirational without being a claim the company cannot yet support.
 *
 * Composition: Single-column, statement-first. Deliberately sparse.
 * This section is deliberately quiet — the vision is stated once,
 * clearly, without elaboration or decoration.
 *
 * Design Constitution §4.3: This is the deliberately quiet section
 * on the About page. No cards, no grids, no density.
 * Design Constitution §4.6: Generous whitespace around a small
 * number of precise claims.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { visionContent } from "@/lib/data/about";

export function Vision() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <div className="border-t border-[var(--border-primary)] pt-[var(--space-8)]">
          <Stack gap="xl">
            <h2 className="max-w-[800px] text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {visionContent.heading}
            </h2>
            <p className="max-w-[720px] text-[var(--text-body-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
              {visionContent.body}
            </p>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
