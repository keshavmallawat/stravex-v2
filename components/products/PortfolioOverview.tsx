/**
 * PortfolioOverview — Products page, Section B.
 *
 * Maps the four mission domains to operational problems.
 * Each domain is presented with a problem statement — the question
 * a procurement officer would ask — followed by the system category.
 *
 * Composition: Definition-list style with problem statements.
 * No card wrappers, no Surface backgrounds. Each domain is a
 * border-bottom entry with bold term + supporting detail.
 *
 * Information density: Low. This section orients, not educates.
 *
 * Design Constitution §4.5: Grid discipline. Left-aligned throughout.
 * Design Constitution §4.7: Monospace reserved for labels.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { missionDomains } from "@/lib/data/products";

export function PortfolioOverview() {
  return (
    <Section spacing="compact">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Mission Domains
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Products are organised by operational problem, not by technology showcase. Each domain
              maps to a specific challenge faced in the field.
            </p>
          </Stack>

          <dl className="flex flex-col gap-[var(--space-6)]">
            {missionDomains.map((domain) => (
              <div
                key={domain.slug}
                className="border-t border-[var(--border-primary)] pt-[var(--space-4)]"
              >
                <dt className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                  {domain.name}
                </dt>
                <dd className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {domain.description}
                </dd>
                <p className="mt-[var(--space-2)] text-[var(--text-small-size)] text-[var(--text-muted)] italic">
                  &ldquo;{domain.problemStatement}&rdquo;
                </p>
              </div>
            ))}
          </dl>
        </Stack>
      </Container>
    </Section>
  );
}
