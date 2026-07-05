/**
 * EngineeringPrinciples — About page, Section D.
 *
 * Engineering philosophy and operating principles — how Stravex thinks
 * about building systems. Each principle is an operating commitment,
 * not a marketing claim.
 *
 * Composition: Two-column layout. Left holds the engineering thesis.
 * Right holds the six principles as a numbered list with border-left
 * treatment. Structurally identical to SystemsThinking on Products page —
 * justified because both sections present a set of engineering commitments
 * in a scannable format.
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
import { engineeringPrinciplesContent } from "@/lib/data/about";

export function EngineeringPrinciples() {
  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {engineeringPrinciplesContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {engineeringPrinciplesContent.body}
            </p>
          </Stack>

          <ol className="flex list-none flex-col gap-[var(--space-5)]">
            {engineeringPrinciplesContent.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="border-l-2 border-[var(--border-primary)] pl-[var(--space-5)] transition-colors hover:border-[var(--interactive-primary)]"
              >
                <span className="mb-[var(--space-1)] block text-[var(--text-small-size)] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-[var(--space-1)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
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
