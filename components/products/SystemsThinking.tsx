/**
 * SystemsThinking — Products page, Section D.
 *
 * Integration and lifecycle narrative — how products work together
 * as operational systems, and how Stravex engineers for the full
 * lifecycle.
 *
 * Composition: Two-column layout. Left holds the systems thesis.
 * Right holds the three principles as a numbered list with
 * border-left treatment. Structurally distinct from both the
 * filterable explorer above and the CTA below.
 *
 * Information density: Medium. Argumentative, not catalogue-like.
 *
 * Design Constitution §4.20: This is an argument, not a story.
 * Each principle has a clear claim supported by engineering logic.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { systemsContent } from "@/lib/data/products";

export function SystemsThinking() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {systemsContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {systemsContent.body}
            </p>
          </Stack>

          <ol className="flex list-none flex-col gap-[var(--space-5)]">
            {systemsContent.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="group border-l-2 border-[var(--border-primary)] pl-[var(--space-5)] transition-colors hover:border-[var(--accent-primary)]"
              >
                <span className="mb-[var(--space-1)] block text-[var(--text-small-size)] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-[var(--space-1)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </li>
            ))}
          </ol>
        </Grid>
      </Container>
    </Section>
  );
}
