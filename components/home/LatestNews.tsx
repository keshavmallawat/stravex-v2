/**
 * LatestNews — Homepage Section 7.
 *
 * Signal of momentum. The company is active, not dormant.
 *
 * Composition: Grid of news article cards. Each card has metadata
 * (date, category) above the title, giving it a distinct structure
 * from the pure title+description cards in other sections.
 * Uses semantic <time> elements for dates.
 *
 * Design Constitution §4.23: News exists to prove the company is
 * active. Never publish filler.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Cluster } from "@/components/ui/Cluster";
import { Grid } from "@/components/ui/Grid";
import { Surface } from "@/components/ui/Surface";
import { getLatestArticles } from "@/lib/data/news";

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function LatestNews() {
  const articles = getLatestArticles(3);

  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Stack gap="lg">
          <Cluster justify="between" align="center">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Latest Updates
            </h2>
            <Link
              href="/news"
              className="text-[var(--text-body-size)] text-[var(--interactive-primary)] hover:text-[var(--interactive-primary-hover)] transition-colors"
            >
              View all news →
            </Link>
          </Cluster>

          <Grid columns={{ sm: 1, md: 3 }} gap="md">
            {articles.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`}>
                <Surface
                  variant="secondary"
                  className="h-full rounded-[var(--radius-md)] border border-[var(--border-primary)] p-[var(--space-5)] transition-colors hover:border-[var(--interactive-primary)]"
                >
                  <Stack gap="sm">
                    <Cluster gap="sm">
                      <time
                        dateTime={article.date}
                        className="text-[var(--text-small-size)] text-[var(--text-muted)]"
                      >
                        {formatDate(article.date)}
                      </time>
                      <span className="text-[var(--text-small-size)] text-[var(--text-tertiary)]">
                        {article.category}
                      </span>
                    </Cluster>
                    <h3 className="text-[var(--text-h3-size)] font-[var(--text-h3-weight)] text-[var(--text-primary)]">
                      {article.title}
                    </h3>
                    <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
                      {article.excerpt}
                    </p>
                  </Stack>
                </Surface>
              </Link>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}
