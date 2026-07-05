/**
 * FeaturedTechnology — Homepage Section 3.
 *
 * One flagship proof point. Not a catalogue. Not a list.
 *
 * Composition: Two-column asymmetric layout. Left column holds
 * the system narrative and CTAs. Right column holds a diagram
 * placeholder. The Surface diagram placeholder uses aspect-ratio
 * for consistent sizing.
 *
 * Design Constitution §4.11: Product renders only for honest forms.
 * Using a diagram placeholder instead.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Cluster } from "@/components/ui/Cluster";
import { Grid } from "@/components/ui/Grid";
import { Surface } from "@/components/ui/Surface";

export function FeaturedTechnology() {
  return (
    <Section spacing="spacious">
      <Container size="lg">
        <Stack gap="lg">
          <Surface
            variant="tertiary"
            className="w-fit rounded-[var(--radius-full)] px-[var(--space-3)] py-[var(--space-1)]"
          >
            <span className="font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--accent-primary)]">
              Featured System
            </span>
          </Surface>

          <Grid columns={{ sm: 1, md: 2 }} gap="lg" className="items-center">
            <Stack gap="md">
              <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
                Sentinel Array
              </h2>
              <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                Multi-static radar detection system for low-altitude threat identification. Designed
                for operational conditions where conventional systems degrade — cluttered terrain,
                contested spectrum, and asymmetric threat profiles.
              </p>
              <Cluster gap="sm">
                <Link
                  href="/products/sentinel-array"
                  className="rounded-[var(--radius-sm)] bg-[var(--interactive-primary)] px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-small-size)] font-[var(--font-weight-semibold)] text-[var(--interactive-primary-foreground)] hover:bg-[var(--interactive-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
                >
                  View System Details
                </Link>
                <Link
                  href="/contact?category=government-defence"
                  className="rounded-[var(--radius-sm)] border border-[var(--border-secondary)] px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-small-size)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
                >
                  Request Technical Briefing
                </Link>
              </Cluster>
            </Stack>

            <Surface
              variant="tertiary"
              className="flex aspect-[4/3] items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-primary)]"
            >
              <span className="text-[var(--text-small-size)] text-[var(--text-muted)]">
                Technical Diagram
              </span>
            </Surface>
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
