/**
 * ProofSection — Homepage Section 6.
 *
 * Honest metrics, published only when verifiable and disclosable.
 *
 * Composition: Single centered statement. Deliberately minimal.
 * No cards, no grids, no visual weight. This is the quiet
 * moment in the page's rhythm — a pause between the argument
 * sections and the activity sections.
 *
 * Design Constitution §4.3: This is the deliberately quiet section.
 * Design Constitution §4.4: Density communicates confidence in
 * inverse proportion to its volume.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";

export function ProofSection() {
  return (
    <Section spacing="default">
      <Container size="md">
        <Stack gap="md" className="text-center">
          <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
            Proof of Engineering
          </h2>
          <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
            Metrics are published only when verifiable and disclosable. We do not fabricate numbers
            for promotional effect.
          </p>
          <p className="text-[var(--text-body-size)] text-[var(--text-tertiary)]">
            Specific performance metrics are available under technical briefing. Disclosable figures
            will be published here as clearance permits.
          </p>
          <Link
            href="/contact"
            className="text-[var(--text-body-size)] text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
          >
            Request a briefing &rarr;
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
