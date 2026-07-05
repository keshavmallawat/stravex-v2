/**
 * DomainOverview — Technologies page, Section B.
 *
 * Navigable index of the four technology domains.
 * Each domain is a link with bold name + one-liner, separated
 * by grid gap with a border-top treatment.
 *
 * Composition: Grid of border-top links — editorial definition-list
 * style. No card wrappers, no Surface backgrounds. Each item is a
 * link with bold term + description, separated by grid gap.
 *
 * Information density: Low. This section orients, not educates.
 *
 * Design Constitution §7: Uniform card grids are a tell of
 * unreviewed AI-generated layout. This section deliberately uses
 * the same border-top pattern as the homepage CapabilityOverview
 * because it serves the same structural role (navigable index)
 * on a different page — this is pattern reuse, not template reuse.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { domainSummaries } from "@/lib/data/technologies";

export function DomainOverview() {
  return (
    <Section spacing="compact">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Core Technology Domains
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Four disciplines. One integrated system. Each domain reinforces the others — detection
              informs tracking, tracking enables autonomy, autonomy supports decisions.
            </p>
          </Stack>

          <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
            {domainSummaries.map((domain) => (
              <Link
                key={domain.slug}
                href={`/technologies/${domain.slug}`}
                className="group block border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {domain.name}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {domain.oneLiner}
                </p>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
