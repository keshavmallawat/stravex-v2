/**
 * AboutCTA — About page, Section F (Closing).
 *
 * Three engagement paths for About page visitors.
 * This page routes to Team (deepen trust in people), Partnership (collaboration),
 * or Technologies (technical depth).
 *
 * Composition: Two-column layout. Left holds the framing statement.
 * Right holds the three engagement paths as border-top links.
 *
 * Information density: Low. Clear, unhurried, specific.
 *
 * CTA strategy (from info.md §2):
 * Soft — About page visitors are usually mid-funnel.
 * Route to Team (deepen trust) or Careers (if evaluating as employer).
 *
 * Design Constitution §4.22: Every CTA names the specific action.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { aboutCTAContent } from "@/lib/data/about";

export function AboutCTA() {
  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {aboutCTAContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {aboutCTAContent.body}
            </p>
          </Stack>

          <Stack gap="xl">
            {aboutCTAContent.paths.map((path) => (
              <Link
                key={path.label}
                href={path.href}
                className="group block border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {path.label}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {path.description}
                </p>
              </Link>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Section>
  );
}
