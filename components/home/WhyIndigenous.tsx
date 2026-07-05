/**
 * WhyIndigenous — Homepage Section 5.
 *
 * The strategic context for indigenous defence engineering.
 *
 * Composition: Single-column layout with a thesis paragraph
 * followed by a definition-list style. Each term is bold with
 * supporting detail — no card wrappers, no Surface backgrounds.
 * Uses a different visual treatment from both the card-grid
 * sections and the numbered-list section above.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";

const strategicArguments = [
  {
    term: "Operational sovereignty",
    definition:
      "Systems designed for our terrain, our threat profile, our operational doctrine — not adapted from a platform built for someone else's requirements.",
  },
  {
    term: "Iterative development",
    definition:
      "Domestic design authority enables rapid iteration based on field feedback. No dependency on foreign approval chains for modifications.",
  },
  {
    term: "Lifecycle control",
    definition:
      "Full authority over upgrade paths, component sourcing, and long-term support — independent of geopolitical shifts.",
  },
];

export function WhyIndigenous() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Why Indigenous. Why Now.
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Strategic dependency on foreign defence platforms creates operational risk. When
              systems are designed elsewhere, adaptation to local conditions is constrained by the
              original design team&apos;s priorities — not ours.
            </p>
          </Stack>

          <dl className="flex flex-col gap-[var(--space-6)]">
            {strategicArguments.map((item) => (
              <div
                key={item.term}
                className="border-b border-[var(--border-primary)] pb-[var(--space-5)] last:border-b-0 last:pb-0"
              >
                <dt className="mb-[var(--space-2)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                  {item.term}
                </dt>
                <dd className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>

          <blockquote className="border-l-2 border-[var(--accent-primary)] pl-[var(--space-5)] italic text-[var(--text-body-lg-size)] leading-[var(--text-body-leading)] text-[var(--text-tertiary)]">
            When systems are designed elsewhere, adaptation to local conditions is constrained by
            the original design team&apos;s priorities — not ours.
          </blockquote>
        </Stack>
      </Container>
    </Section>
  );
}
