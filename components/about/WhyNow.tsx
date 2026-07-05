/**
 * WhyNow — About page, Section C.
 *
 * The convergence of three forces that makes this moment urgent.
 * Each force is presented as a distinct trend with clear rationale.
 *
 * Composition: Editorial intro + three-column grid of forces.
 * Each force is a border-top entry with title and description.
 * Structurally distinct from the editorial thesis above and the
 * principles grid below.
 *
 * Information density: Medium. Each force is a clear claim with support.
 *
 * Design Constitution §4.5: Grid discipline. Left-aligned throughout.
 * Design Constitution §4.7: Monospace reserved for labels.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { whyNowContent } from "@/lib/data/about";

export function WhyNow() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {whyNowContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {whyNowContent.body}
            </p>
          </Stack>

          <Grid columns={{ sm: 1, md: 3 }} gap="lg">
            {whyNowContent.forces.map((force) => (
              <div
                key={force.title}
                className="border-t border-[var(--border-primary)] pt-[var(--space-4)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                  {force.title}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {force.description}
                </p>
              </div>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
