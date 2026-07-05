/**
 * TechnologiesCTA — Technologies page, Section E (Closing).
 *
 * Research-oriented engagement paths. This CTA is aimed at
 * engineers and technical partners, not procurement officers.
 *
 * Composition: Two-column layout. Left holds the statement.
 * Right holds the engagement paths as links with descriptions.
 * Structurally distinct from all preceding sections.
 *
 * Information density: Low. Clear, unhurried, specific.
 *
 * CTA strategy (from CONTENT_STRATEGY.md):
 * "Explore Careers" / "Research Collaboration" — research-oriented,
 * not sales. The Technologies page has a more homogeneous audience
 * than Products, so a single CTA block with two paths is appropriate.
 *
 * Design Constitution §4.22: Every CTA names the specific action.
 * No "Learn More", no "Get Started".
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { ctaContent } from "@/lib/data/technologies";

export function TechnologiesCTA() {
  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {ctaContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {ctaContent.body}
            </p>
          </Stack>

          <Stack gap="lg">
            {ctaContent.paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group block border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--interactive-primary)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--interactive-primary)] transition-colors">
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
