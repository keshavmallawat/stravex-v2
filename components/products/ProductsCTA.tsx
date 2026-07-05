/**
 * ProductsCTA — Products page, Section E (Closing).
 *
 * Four differentiated engagement paths for different buyer types.
 * This is the one page with 4 CTA paths — matching the reality
 * that Products visitors include procurement officers, defence
 * organisations, OEMs, and strategic partners.
 *
 * Composition: Two-column layout. Left holds the framing statement.
 * Right holds the four engagement paths as border-top links.
 *
 * Information density: Low. Clear, unhurried, specific.
 *
 * CTA strategy (from CONTENT_STRATEGY.md §12):
 * "Request a briefing" / "Request technical documentation" —
 * gated, formal, consistent with how real defence buyers engage vendors.
 * Never "Buy" or "Get Started".
 *
 * Design Constitution §4.22: Every CTA names the specific action.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { productsCTAContent } from "@/lib/data/products";

export function ProductsCTA() {
  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {productsCTAContent.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {productsCTAContent.body}
            </p>
          </Stack>

          <Stack gap="lg">
            {productsCTAContent.paths.map((path) => (
              <Link
                key={path.label}
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
