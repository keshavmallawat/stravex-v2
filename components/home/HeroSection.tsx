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
import { Surface } from "@/components/ui/Surface";

export function HeroSection() {
  return (
    <Section spacing="hero">
      <Container size="xl">
        <Stack gap="lg">
          <Surface
            variant="interactive"
            className="w-fit rounded-[var(--radius-full)] px-[var(--space-3)] py-[var(--space-1)]"
          >
            <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
              Indian Defence Technology
            </span>
          </Surface>
          <h1 className="max-w-[800px] text-[var(--text-h1-size)] leading-[var(--text-h1-leading)] text-[var(--text-primary)]">
            Detection, interception, and autonomous defence — engineered for the operational
            conditions our forces actually face.
          </h1>
          <p className="max-w-[640px] text-[var(--text-lead-size)] leading-[var(--text-body-leading)] text-[var(--text-secondary)]">
            Stravex builds integrated defence systems from sensor to response. Not adapted from
            someone else&apos;s platform. Designed for the threats we face, the terrain we operate
            in, and the reliability mission-critical systems demand.
          </p>
          <Cluster gap="sm">
            <Link
              href="/technologies"
              className="rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] px-[var(--space-5)] py-[var(--space-3)] text-[var(--text-body-size)] font-[var(--text-body-weight)] text-[var(--text-inverse)] hover:bg-[var(--interactive-primary-hover)] transition-colors"
            >
              Explore Our Technology
            </Link>
            <Link
              href="/about"
              className="rounded-[var(--radius-sm)] border border-[var(--border-primary)] bg-[var(--surface-primary)] px-[var(--space-5)] py-[var(--space-3)] text-[var(--text-body-size)] font-[var(--text-body-weight)] text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors"
            >
              Why Stravex Exists
            </Link>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
}
