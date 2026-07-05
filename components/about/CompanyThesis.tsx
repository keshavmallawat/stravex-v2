/**
 * CompanyThesis — About page, Section B.
 *
 * The strategic argument for why Stravex exists as a company.
 * This is the core thesis — the problem, why current approaches fail,
 * and why indigenous engineering is the answer.
 *
 * Composition: Single-column editorial. Statement-first, then support.
 * Structurally distinct from the hero above (which is a single statement)
 * and the WhyNow below (which has a grid of forces).
 *
 * Information density: Medium. Argumentative, not catalogue-like.
 *
 * Design Constitution §4.20: This is an argument, not a story.
 * Each claim has a clear basis.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";

export function CompanyThesis() {
  return (
    <Section spacing="compact">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              The strategic problem
            </h2>
          </Stack>

          <div className="max-w-[720px] space-y-[var(--space-5)]">
            <p className="text-[var(--text-body-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
              Much of the existing detect-and-intercept infrastructure was designed for a different
              scale and tempo of threat — fewer, larger, slower-evolving. The new threat environment
              is defined by volume, cost-asymmetry, and rapid iteration on the adversary&apos;s
              side.
            </p>
            <p className="text-[var(--text-body-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
              Systems that cannot be updated, adapted, and scaled at a comparable tempo will fall
              behind regardless of their original sophistication. A meaningful share of tactical
              defence infrastructure in many operating environments — including India&apos;s — has
              historically depended on imported systems.
            </p>
            <p className="text-[var(--text-body-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
              This introduces both a capability lag and a strategic dependency. Indigenous
              engineering can directly address both.
            </p>
            <p className="text-[var(--text-body-size)] leading-[var(--text-body-leading)] text-[var(--text-primary)]">
              Stravex exists to close that gap. Systems designed, built, and iterated on
              domestically. Tuned to the specific operational conditions and doctrine of the forces
              that will use them. Not adapted from a foreign system built for a different threat
              environment.
            </p>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
