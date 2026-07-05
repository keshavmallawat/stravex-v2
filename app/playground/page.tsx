/**
 * /playground — Internal Layout Engine validation route.
 *
 * This page demonstrates every Layout Engine primitive and variant
 * using realistic placeholder content. It is for internal validation
 * only and is not part of the public website.
 *
 * Hidden from navigation. Not indexed by search engines.
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Cluster } from "@/components/ui/Cluster";
import { Grid } from "@/components/ui/Grid";
import { Surface } from "@/components/ui/Surface";
import { Divider } from "@/components/ui/Divider";
import { Prose } from "@/components/ui/Prose";
import { VisuallyHidden } from "@/components/ui/VisuallyHidden";
import { SkipLink } from "@/components/ui/SkipLink";

export default function PlaygroundPage() {
  return (
    <>
      <SkipLink />
      <VisuallyHidden>
        <h1>Layout Engine Playground</h1>
      </VisuallyHidden>

      {/* ── Container ────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Container
            </h2>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Size variants
              </h3>
              {(["xs", "sm", "md", "lg", "xl", "2xl", "prose", "full"] as const).map((size) => (
                <Container key={size} size={size}>
                  <Surface
                    variant="secondary"
                    className="rounded-[var(--radius-sm)] p-[var(--space-3)] text-center"
                  >
                    <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                      size=&quot;{size}&quot;
                    </span>
                  </Surface>
                </Container>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Section ──────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Section
            </h2>

            {(["flush", "compact", "default", "spacious", "hero"] as const).map((spacing) => (
              <div key={spacing}>
                <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                  spacing=&quot;{spacing}&quot;
                </p>
                <Section spacing={spacing}>
                  <Surface
                    variant="tertiary"
                    className="rounded-[var(--radius-sm)] p-[var(--space-3)] text-center"
                  >
                    <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                      Content
                    </span>
                  </Surface>
                </Section>
              </div>
            ))}
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Stack ────────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Stack
            </h2>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Gap variants
              </h3>
              {(["xs", "sm", "md", "lg", "xl"] as const).map((gap) => (
                <div key={gap}>
                  <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                    gap=&quot;{gap}&quot;
                  </p>
                  <Stack gap={gap}>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] p-[var(--space-2)] text-center"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        Item 1
                      </span>
                    </Surface>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] p-[var(--space-2)] text-center"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        Item 2
                      </span>
                    </Surface>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] p-[var(--space-2)] text-center"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        Item 3
                      </span>
                    </Surface>
                  </Stack>
                </div>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Cluster ──────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Cluster
            </h2>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Alignment variants
              </h3>
              {(["start", "center", "end", "stretch"] as const).map((align) => (
                <div key={align}>
                  <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                    align=&quot;{align}&quot;
                  </p>
                  <Cluster align={align} gap="sm">
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-2)]"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        A
                      </span>
                    </Surface>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-2)]"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        B
                      </span>
                    </Surface>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-2)]"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        C
                      </span>
                    </Surface>
                  </Cluster>
                </div>
              ))}
            </Stack>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Justify variants
              </h3>
              {(["start", "center", "end", "between"] as const).map((justify) => (
                <div key={justify}>
                  <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                    justify=&quot;{justify}&quot;
                  </p>
                  <Cluster justify={justify} gap="sm">
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-2)]"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        A
                      </span>
                    </Surface>
                    <Surface
                      variant="secondary"
                      className="rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-2)]"
                    >
                      <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                        B
                      </span>
                    </Surface>
                  </Cluster>
                </div>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Grid
            </h2>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Fixed columns
              </h3>
              {([2, 3, 4, 6, 12] as const).map((columns) => (
                <div key={columns}>
                  <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                    columns=&quot;{columns}&quot;
                  </p>
                  <Grid columns={columns} gap="sm">
                    {Array.from({ length: columns }, (_, i) => (
                      <Surface
                        key={i}
                        variant="secondary"
                        className="rounded-[var(--radius-sm)] p-[var(--space-3)] text-center"
                      >
                        <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                          {i + 1}
                        </span>
                      </Surface>
                    ))}
                  </Grid>
                </div>
              ))}
            </Stack>

            <Stack gap="md">
              <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                Responsive columns
              </h3>
              <p className="text-[var(--text-small-size)] text-[var(--text-tertiary)] mb-[var(--space-2)]">
                columns=&quot;{"{ sm: 2, md: 3, lg: 4 }"}&quot;
              </p>
              <Grid columns={{ sm: 2, md: 3, lg: 4 }} gap="sm">
                {Array.from({ length: 6 }, (_, i) => (
                  <Surface
                    key={i}
                    variant="secondary"
                    className="rounded-[var(--radius-sm)] p-[var(--space-3)] text-center"
                  >
                    <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                      {i + 1}
                    </span>
                  </Surface>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Surface ──────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Surface
            </h2>

            <Grid columns={{ sm: 2, md: 3 }} gap="sm">
              {(
                [
                  "transparent",
                  "primary",
                  "secondary",
                  "tertiary",
                  "elevated",
                  "interactive",
                ] as const
              ).map((variant) => (
                <Surface
                  key={variant}
                  variant={variant}
                  className="rounded-[var(--radius-md)] p-[var(--space-4)] border border-[var(--border-primary)]"
                >
                  <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                    {variant}
                  </span>
                </Surface>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Divider ──────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Divider
            </h2>

            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Content above
            </p>
            <Divider spacing="sm" />
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              spacing=&quot;sm&quot;
            </p>
            <Divider spacing="md" />
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              spacing=&quot;md&quot;
            </p>
            <Divider spacing="lg" />
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              spacing=&quot;lg&quot;
            </p>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Prose ────────────────────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Prose
            </h2>

            <Prose>
              <h2>Technical Documentation Sample</h2>
              <p>
                This prose block demonstrates how long-form technical content renders with the
                design system typography. Every element inherits from the token system — headings,
                paragraphs, lists, and code blocks all use semantic variables.
              </p>
              <h3>System Architecture</h3>
              <p>
                The detection pipeline processes sensor input through three stages: acquisition,
                classification, and tracking. Each stage operates independently, allowing parallel
                processing across multiple sensor feeds.
              </p>
              <ul>
                <li>Acquisition: Raw sensor data ingestion and preprocessing</li>
                <li>Classification: ML-based threat categorisation with confidence scoring</li>
                <li>Tracking: Multi-object track management and prediction</li>
              </ul>
              <h3>Configuration</h3>
              <p>
                System parameters are defined in the configuration schema. All values use SI units
                unless explicitly noted. The following code block shows a typical configuration:
              </p>
              <pre>
                <code>{`{
  "sensor": {
    "type": "radar",
    "range_km": 120,
    "update_rate_hz": 10
  },
  "classification": {
    "model": "v2.3",
    "confidence_threshold": 0.85
  }
}`}</code>
              </pre>
              <h4>Important Notes</h4>
              <p>
                <strong>Configuration validation</strong> happens at system startup. Invalid
                configurations will prevent the system from initialising. Always validate against
                the schema before deployment.
              </p>
              <blockquote>
                <p>
                  Systems that cannot be updated, adapted, and scaled at a comparable tempo will
                  fall behind regardless of their original sophistication.
                </p>
              </blockquote>
              <hr />
              <p>
                <em>
                  This documentation is for internal reference. Do not distribute outside the
                  engineering team.
                </em>
              </p>
            </Prose>
          </Stack>
        </Container>
      </Section>

      <Divider />

      {/* ── Composition example ──────────────────────────────────── */}
      <Section spacing="spacious">
        <Container size="xl">
          <Stack gap="lg">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Composition Example
            </h2>

            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              A realistic layout combining multiple primitives.
            </p>

            <Container size="lg">
              <Section spacing="compact">
                <Surface
                  variant="primary"
                  className="rounded-[var(--radius-md)] border border-[var(--border-primary)]"
                >
                  <div className="p-[var(--space-6)]">
                    <Cluster gap="sm" className="mb-[var(--space-4)]">
                      <Surface
                        variant="interactive"
                        className="rounded-[var(--radius-full)] px-[var(--space-3)] py-[var(--space-1)]"
                      >
                        <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                          Operational
                        </span>
                      </Surface>
                      <span className="text-[var(--text-small-size)] text-[var(--text-tertiary)]">
                        Detection System
                      </span>
                    </Cluster>
                    <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)] mb-[var(--space-2)]">
                      Sentinel Array
                    </h3>
                    <p className="text-[var(--text-body-size)] text-[var(--text-secondary)] mb-[var(--space-4)]">
                      Multi-static radar detection system for low-altitude threat identification and
                      tracking.
                    </p>
                    <Cluster gap="sm">
                      <Surface
                        variant="interactive"
                        className="rounded-[var(--radius-sm)] px-[var(--space-4)] py-[var(--space-2)]"
                      >
                        <span className="text-[var(--text-small-size)] text-[var(--text-primary)]">
                          View Details
                        </span>
                      </Surface>
                      <Surface
                        variant="secondary"
                        className="rounded-[var(--radius-sm)] px-[var(--space-4)] py-[var(--space-2)]"
                      >
                        <span className="text-[var(--text-small-size)] text-[var(--text-secondary)]">
                          Spec Sheet
                        </span>
                      </Surface>
                    </Cluster>
                  </div>
                </Surface>
              </Section>
            </Container>
          </Stack>
        </Container>
      </Section>

      <Divider spacing="lg" />

      {/* ── Footer spacer ────────────────────────────────────────── */}
      <Section spacing="compact">
        <Container size="xl">
          <p className="text-[var(--text-small-size)] text-[var(--text-muted)] text-center">
            /playground — Internal validation only. Not part of the public website.
          </p>
        </Container>
      </Section>
    </>
  );
}
