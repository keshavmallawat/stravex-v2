/**
 * HeroSection — Homepage Section 1.
 *
 * Statement of purpose. The visitor's first impression:
 * "this is a serious engineering company."
 *
 * Composition: Single-column, statement-first layout.
 * No cards. Typography carries the weight.
 *
 * Design Constitution §4.3: This is the deliberately emphasized section.
 * Design Constitution §4.2: No centered symmetrical hero — content justifies layout.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Cluster } from "@/components/ui/Cluster";

export function HeroSection() {
  return (
    <Section spacing="hero">
      <Container size="prose">
        <Stack gap="lg">
          <span className="block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--accent-primary)]">
            Indian Defence Technology
          </span>
          <h1 className="text-[var(--text-h1-size)] leading-[var(--text-h1-leading)] text-[var(--text-primary)]">
            Detection, interception, and autonomous defence — engineered for the operational
            conditions our forces actually face.
          </h1>
          <p className="text-[var(--text-lead-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
            Stravex builds integrated defence systems from sensor to response. Not adapted from
            someone else&apos;s platform. Designed for the threats we face, the terrain we operate
            in, and the reliability mission-critical systems demand.
          </p>
          <Cluster gap="sm">
            <Link
              href="/technologies"
              className="rounded-[var(--radius-sm)] bg-[var(--accent-primary)] px-[var(--space-5)] py-[var(--space-3)] text-[var(--text-body-size)] font-[var(--font-weight-semibold)] text-[var(--accent-primary-foreground)] hover:bg-[var(--accent-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
            >
              Explore Our Technology
            </Link>
            <Link
              href="/about"
              className="rounded-[var(--radius-sm)] border border-[var(--border-secondary)] px-[var(--space-5)] py-[var(--space-3)] text-[var(--text-body-size)] font-[var(--text-body-weight)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
            >
              Why Stravex Exists
            </Link>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
}
