/**
 * DomainDeepDive — Technologies page, Section C.
 *
 * Per-domain technical content — the core of the Technologies page.
 * Each domain gets a deep-dive section here and also has its own
 * dedicated route (/technologies/[slug]) for full detail.
 *
 * Composition: Alternating layout per domain to break visual
 * repetition. Even-indexed domains use a two-column grid (left:
 * overview + significance, right: applications + roadmap).
 * Odd-indexed domains use a full-width stacked layout with
 * inline-block field labels.
 *
 * Information density: Medium-to-high. This is where technical
 * depth lives.
 *
 * Trust strategy: Technical specificity without classified overreach.
 * Describe approach and why it matters — not implementation details.
 *
 * Design Constitution §4.3: This section is deliberately quiet
 * relative to the Hero — it rewards the reader who scrolls.
 * Design Constitution §4.4: Density earns its place through
 * technical substance, not volume.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { technologyDomains } from "@/lib/data/technologies";

function DomainBlock({
  domain,
  index,
}: {
  domain: (typeof technologyDomains)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  if (isEven) {
    return (
      <Grid columns={{ sm: 1, md: 2 }} gap="xl" className="items-start">
        <Stack gap="md">
          <h3 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
            {domain.name}
          </h3>
          <div>
            <span className="mb-[var(--space-2)] block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
              Overview
            </span>
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {domain.overview || "Content to be drafted during the content phase."}
            </p>
          </div>
          <div>
            <span className="mb-[var(--space-2)] block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
              Technical Significance
            </span>
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {domain.significance || "Content to be drafted during the content phase."}
            </p>
          </div>
        </Stack>

        <Stack gap="md">
          <div>
            <span className="mb-[var(--space-2)] block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
              Applications
            </span>
            {domain.applications.length > 0 ? (
              <ul className="flex list-none flex-col gap-[var(--space-2)]">
                {domain.applications.map((app) => (
                  <li
                    key={app}
                    className="text-[var(--text-body-size)] text-[var(--text-secondary)]"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                Content to be drafted during the content phase.
              </p>
            )}
          </div>
          <div>
            <span className="mb-[var(--space-2)] block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
              Roadmap
            </span>
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              {domain.roadmap || "Directional — to be drafted during the content phase."}
            </p>
          </div>
          <Link
            href={`/technologies/${domain.slug}`}
            className="mt-[var(--space-2)] inline-block text-[var(--text-small-size)] text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
          >
            Full domain detail &rarr;
          </Link>
        </Stack>
      </Grid>
    );
  }

  // Odd-indexed domains: full-width stacked layout
  return (
    <Stack gap="md">
      <h3 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
        {domain.name}
      </h3>
      <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
        {domain.overview || "Content to be drafted during the content phase."}
      </p>
      <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
        {domain.significance || "Content to be drafted during the content phase."}
      </p>

      {domain.applications.length > 0 ? (
        <ol className="flex list-none flex-col gap-[var(--space-3)]">
          {domain.applications.map((app, i) => (
            <li
              key={app}
              className="border-l-2 border-[var(--border-primary)] pl-[var(--space-5)] transition-colors hover:border-[var(--accent-primary)]"
            >
              <span className="mb-[var(--space-1)] block text-[var(--text-small-size)] text-[var(--text-muted)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">{app}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
          Content to be drafted during the content phase.
        </p>
      )}

      <div>
        <span className="mb-[var(--space-2)] block font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
          Roadmap
        </span>
        <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
          {domain.roadmap || "Directional — to be drafted during the content phase."}
        </p>
      </div>
      <Link
        href={`/technologies/${domain.slug}`}
        className="mt-[var(--space-2)] inline-block text-[var(--text-small-size)] text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)]"
      >
        Full domain detail &rarr;
      </Link>
    </Stack>
  );
}

export function DomainDeepDive() {
  const domains = technologyDomains;

  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Stack gap="xl" className="gap-[var(--space-16)]">
          {domains.map((domain, index) => (
            <div
              key={domain.slug}
              className="border-t border-[var(--border-primary)] pt-[var(--space-10)]"
            >
              <DomainBlock domain={domain} index={index} />
              {index === 0 && (
                <blockquote className="mt-[var(--space-10)] border-l-2 border-[var(--accent-primary)] pl-[var(--space-5)] italic text-[var(--text-body-lg-size)] leading-[var(--text-body-leading)] text-[var(--text-tertiary)]">
                  Defence technology is not a product category — it is an operational constraint.
                  Every system must perform under conditions that cannot be simulated in a
                  laboratory.
                </blockquote>
              )}
            </div>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
