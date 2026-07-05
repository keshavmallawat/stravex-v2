/**
 * ValidationSection — Technologies page, Section D.
 *
 * Third-party validation, certifications, trials, partnerships,
 * and any formal recognition that substantiates the engineering
 * claims made in earlier sections.
 *
 * Composition: Definition-list style with monospace type labels.
 * Each entry has a type tag, title, and description. No card
 * wrappers, no Surface backgrounds. Structurally distinct from
 * the deep-dive blocks above.
 *
 * Information density: Medium.
 *
 * Trust strategy: Validation evidence is more persuasive when
 * attached to the specific claim it substantiates. Entries are
 * linked back to the relevant technology domain where possible.
 *
 * Governance: Only publish validation that is confirmed and
 * disclosable. Defence-specific constraint — never fabricate
 * or imply validation that doesn't exist.
 *
 * Design Constitution §4.18: Every claim should survive the
 * question "would this hold up if a colleague fact-checked it?"
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { validation } from "@/lib/data/technologies";

export function ValidationSection() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              {validation.heading}
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {validation.body}
            </p>
          </Stack>

          {validation.entries.length > 0 ? (
            <dl className="flex flex-col gap-[var(--space-6)]">
              {validation.entries.map((entry) => (
                <div
                  key={entry.title}
                  className="border-t border-[var(--border-primary)] pt-[var(--space-4)]"
                >
                  <dt>
                    <span className="mb-[var(--space-1)] inline-block rounded-[var(--radius-full)] px-[var(--space-2)] py-[var(--space-1)] font-[var(--font-weight-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
                      {entry.type}
                    </span>
                    <span className="ml-[var(--space-3)] text-[var(--text-h4-size)] font-[var(--text-h4-weight)] text-[var(--text-primary)]">
                      {entry.title}
                    </span>
                  </dt>
                  <dd className="mt-[var(--space-2)] text-[var(--text-body-size)] text-[var(--text-secondary)]">
                    {entry.description}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Validation entries to be added as certifications, trials, and partnerships are
              confirmed and disclosable.
            </p>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
