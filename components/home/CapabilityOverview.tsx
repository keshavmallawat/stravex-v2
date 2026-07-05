/**
 * CapabilityOverview — Homepage Section 2.
 *
 * Four integrated disciplines. One system architecture.
 *
 * Composition: Grid without card wrappers — editorial definition-list
 * style. Each item is a link with bold term + description, separated
 * by grid gap. No Surface borders. No card padding.
 *
 * This section is deliberately lighter than the Hero —
 * a quiet transition into capability depth.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";

const capabilityDomains = [
  {
    title: "Detection",
    description:
      "Multi-sensor systems that identify and track threats across range, terrain, and conditions.",
    href: "/technologies/detection-tracking",
  },
  {
    title: "Interception",
    description:
      "Response systems that close the loop from detection to engagement with precision.",
    href: "/products",
  },
  {
    title: "Autonomy",
    description:
      "Decision-making systems that operate under uncertainty with defined confidence boundaries.",
    href: "/technologies/autonomous-systems",
  },
  {
    title: "AI & ML",
    description:
      "Classification, tracking, and decision support — applied where it measurably improves outcome.",
    href: "/technologies/ai-ml",
  },
];

export function CapabilityOverview() {
  return (
    <Section spacing="compact">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Capability Domains
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Four integrated disciplines. One system architecture. From detection to interception,
              each domain reinforces the others.
            </p>
          </Stack>

          <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
            {capabilityDomains.map((domain) => (
              <Link
                key={domain.title}
                href={domain.href}
                className="group block border-t border-[var(--border-primary)] pt-[var(--space-4)] transition-colors hover:border-[var(--interactive-primary)]"
              >
                <h3 className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] group-hover:text-[var(--interactive-primary)] transition-colors">
                  {domain.title}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {domain.description}
                </p>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
