/**
 * News articles data.
 *
 * Static data for news articles displayed on the Homepage and News page.
 * Used by:
 *  - Homepage Latest News section (summary view)
 *  - News listing page (full index)
 *  - Individual article detail pages
 *
 * Content governance:
 *  - Never publish filler content. An honestly sparse page with 3
 *    substantive posts is more credible than a padded one.
 *  - Dates must be real publication dates, not placeholders.
 *  - Categories must match NewsCategory type in lib/types.ts.
 */

import type { NewsArticle } from "../types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "phase-2-integration-testing-complete",
    title: "Stravex completes Phase 2 integration testing",
    date: "2026-06-15",
    category: "announcements",
    excerpt:
      "The detection-to-interception pipeline has completed operational validation under representative field conditions.",
    relatedProducts: [],
    relatedTechnologies: ["detection-tracking", "ai-ml"],
  },
  {
    slug: "multi-static-radar-cluttered-terrain",
    title: "Multi-static radar configurations for cluttered terrain",
    date: "2026-05-28",
    category: "research",
    excerpt:
      "Technical paper on adaptive waveform selection in contested electromagnetic environments.",
    relatedProducts: [],
    relatedTechnologies: ["detection-tracking"],
  },
  {
    slug: "defexpo-2026",
    title: "Stravex participates in DefExpo 2026",
    date: "2026-04-10",
    category: "press",
    excerpt:
      "Company showcased integrated detection and autonomous response capabilities at the national defence exhibition.",
    relatedProducts: [],
    relatedTechnologies: [],
  },
];

/**
 * Helper: get the most recent N articles, sorted by date descending.
 */
export function getLatestArticles(count: number): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

/**
 * Helper: get articles by category.
 */
export function getArticlesByCategory(category: string): NewsArticle[] {
  return newsArticles.filter((a) => a.category === category);
}

/**
 * Helper: get a single article by slug.
 */
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
