/**
 * ContactCTA — Homepage Section 8.
 *
 * Segmented engagement paths. Each route leads to the right team.
 *
 * Composition: Grid of engagement paths without card wrappers.
 * Each item is a link with bold term and short description,
 * separated by top borders. This mirrors the CapabilityOverview
 * section's editorial style but with a different visual treatment:
 * the border-top creates a horizontal rhythm distinct from
 * the card-grid pattern.
 *
 * Design Constitution §4.22: Every CTA names the specific action.
 * No "Learn More," no "Get Started," no "Contact Us."
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";

const engagementPaths = [
  {
    title: "Partnership",
    description: "Strategic collaboration, OEM integration, co-development.",
    href: "/contact?category=partnership",
  },
  {
    title: "Government & Defence",
    description: "Procurement enquiries, operational briefings, trials.",
    href: "/contact?category=government-defence",
  },
  {
    title: "Careers",
    description: "Engineering roles, research positions, internships.",
    href: "/team",
  },
  {
    title: "Press",
    description: "Media enquiries, press kits, interview requests.",
    href: "/contact?category=press",
  },
];

export function ContactCTA() {
  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Engage With Stravex
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Select the engagement path that matches your role. Each route leads to the right team
              — not a general inquiry form.
            </p>
          </Stack>

          <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
            {engagementPaths.map((cta) => (
              <Link
                key={cta.title}
                href={cta.href}
                className="group block border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {cta.title}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {cta.description}
                </p>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
