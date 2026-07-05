/**
 * ProductExplorer — Products page, Section C.
 *
 * Filterable product index. This is the core of the Products page —
 * where visitors find products that match their mission need.
 *
 * Composition: Two-column layout on desktop. Left holds the filter
 * panel (ProductFilter). Right holds the product grid (ProductCard).
 * On mobile, filters collapse and the grid goes full-width.
 *
 * Information density: Medium. Enough to support a filtering decision;
 * full depth reserved for the detail page.
 *
 * This is the one section on this page that requires "use client"
 * — filter state is interactive.
 *
 * Design Constitution §4.23: Products page can be denser than
 * Technologies. Filterable scannability → deep evaluation.
 */

"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Stack } from "@/components/ui/Stack";
import { Grid } from "@/components/ui/Grid";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";
import type { MissionDomain, MaturityStatus } from "@/lib/types";

const missionFilters: { value: MissionDomain | "all"; label: string }[] = [
  { value: "all", label: "All Domains" },
  { value: "detection", label: "Detection" },
  { value: "interception", label: "Interception" },
  { value: "autonomy", label: "Autonomous Systems" },
  { value: "electronics", label: "Electronics" },
];

const maturityFilters: { value: MaturityStatus | "all"; label: string }[] = [
  { value: "all", label: "All Status" },
  { value: "operational", label: "Operational" },
  { value: "in-development", label: "In Development" },
  { value: "prototype", label: "Prototype" },
];

export function ProductExplorer() {
  const [missionFilter, setMissionFilter] = useState<MissionDomain | "all">("all");
  const [maturityFilter, setMaturityFilter] = useState<MaturityStatus | "all">("all");

  const filtered = products.filter((p) => {
    if (missionFilter !== "all" && p.missionDomain !== missionFilter) return false;
    if (maturityFilter !== "all" && p.maturityStatus !== maturityFilter) return false;
    return true;
  });

  return (
    <Section spacing="spacious">
      <Container size="xl">
        <Stack gap="lg">
          <Stack gap="md">
            <h2 className="text-[var(--text-h2-size)] font-[var(--text-h2-weight)] text-[var(--text-primary)]">
              Product Index
            </h2>
            <p className="max-w-[640px] text-[var(--text-body-size)] text-[var(--text-secondary)]">
              Filter by mission domain or maturity status. Each product links to a detailed page
              with full specifications and operational context.
            </p>
          </Stack>

          {/* Filter controls */}
          <div className="flex flex-wrap gap-[var(--space-4)]">
            <fieldset>
              <legend className="mb-[var(--space-2)] font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
                Mission Domain
              </legend>
              <div className="flex flex-wrap gap-[var(--space-2)]">
                {missionFilters.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setMissionFilter(f.value)}
                    aria-pressed={missionFilter === f.value}
                    className={`rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-1)] text-[var(--text-small-size)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)] ${
                      missionFilter === f.value
                        ? "bg-[var(--accent-primary)] text-[var(--accent-primary-foreground)]"
                        : "border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-[var(--space-2)] font-[var(--font-mono)] text-[var(--text-mono-size)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-muted)]">
                Maturity Status
              </legend>
              <div className="flex flex-wrap gap-[var(--space-2)]">
                {maturityFilters.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setMaturityFilter(f.value)}
                    aria-pressed={maturityFilter === f.value}
                    className={`rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-1)] text-[var(--text-small-size)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring-color)] ${
                      maturityFilter === f.value
                        ? "bg-[var(--accent-primary)] text-[var(--accent-primary-foreground)]"
                        : "border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {filtered.map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  missionDomain={product.missionDomain}
                  maturityStatus={product.maturityStatus}
                  description={product.shortDescription}
                />
              ))}
            </Grid>
          ) : (
            <p className="text-[var(--text-body-size)] text-[var(--text-secondary)]">
              No products match the selected filters.
            </p>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
