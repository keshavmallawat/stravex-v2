/**
 * EngineeringPhilosophy — Homepage Section 4.
 *
 * Why Stravex builds the way it builds.
 *
 * Composition: Two-column layout. Left holds the thesis.
 * Right holds a numbered list of principles — no card wrappers,
 * no Surface backgrounds. Each principle is a numbered item
 * with a rule heading and supporting detail.
 *
 * This section uses a deliberately different visual treatment
 * from the card-grid sections to break the page's visual rhythm.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";

const principles = [
  {
    principle: "Validation before claim",
    detail:
      "What we say a system does is what we have tested it to do. No capability is claimed without operational or operationally representative validation.",
  },
  {
    principle: "Graceful degradation",
    detail:
      "Systems are designed to continue functioning under partial failure. Mission continuity is a design constraint, not an afterthought.",
  },
  {
    principle: "Integration over isolation",
    detail:
      "Detection without a reliable response path is an alert system, not a defence system. We build both ends of the chain.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <Section spacing="default">
      <Container size="xl">
        <Grid columns={{ sm: 1, md: 2 }} gap="xl">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Engineering Philosophy
            </h2>
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Systems that cannot be updated, adapted, and scaled at operational tempo will fall
              behind regardless of their original sophistication. Stravex engineers for the full
              lifecycle — not the demo.
            </p>
          </Stack>

          <ol className="flex list-none flex-col gap-[var(--space-5)]">
            {principles.map((item, index) => (
              <li
                key={item.principle}
                className="border-l-2 border-[var(--border-primary)] pl-[var(--space-5)] transition-colors hover:border-[var(--interactive-primary)]"
              >
                <span className="mb-[var(--space-1)] block text-[var(--text-small-size)] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-[var(--space-1)] text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                  {item.principle}
                </h3>
                <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </Grid>
      </Container>
    </Section>
  );
}
