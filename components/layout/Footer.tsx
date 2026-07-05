/**
 * Site-wide footer component.
 *
 * Responsibilities:
 * - Full sitemap (all 7 pages + product/technology sub-pages)
 * - Company information (registered entity)
 * - Legal links (Privacy, Terms)
 * - Contact / press contact
 * - Copyright notice
 *
 * Design principles (from STRAVEX TECHNOLOGIES - info.md):
 * - Secondary navigation and trust layer, not filler
 * - Engineering-first, not SaaS
 * - Small type, clearly subordinate to the rest of the page
 * - Quiet element — the quietest on the page
 * - 4-column on desktop, 2 on tablet, single on mobile
 * - Mobile: fully expanded, no accordion (crawlability, usability)
 *
 * This is a Server Component — no interactivity required.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerGroups } from "@/lib/navigation";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-secondary)]">
      <Container size="xl">
        <div className="py-[var(--space-section-md)]">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 gap-[var(--space-8)] sm:grid-cols-2 lg:grid-cols-4">
            {/* Company info — takes one column */}
            <div>
              <h3 className="mb-[var(--space-3)] text-[var(--text-small-size)] font-[var(--font-weight-semibold)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-tertiary)]">
                Stravex Technologies
              </h3>
              <p className="mb-[var(--space-4)] text-[var(--text-small-size)] leading-[var(--line-height-relaxed)] text-[var(--text-secondary)]">
                Indian defence technology company. Detection, interception, and autonomous defence
                systems — engineered for operational conditions.
              </p>
              <address className="not-italic text-[var(--text-small-size)] leading-[var(--line-height-relaxed)] text-[var(--text-tertiary)]">
                <p>Bengaluru, Karnataka</p>
                <p>India</p>
              </address>
            </div>

            {/* Navigation groups */}
            {footerGroups.map((group) => (
              <nav key={group.heading} aria-label={`${group.heading} links`}>
                <h3 className="mb-[var(--space-3)] text-[var(--text-small-size)] font-[var(--font-weight-semibold)] uppercase tracking-[var(--letter-spacing-wider)] text-[var(--text-tertiary)]">
                  {group.heading}
                </h3>
                <ul className="flex list-none flex-col gap-[var(--space-2)]">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[var(--text-small-size)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-[var(--space-3)] border-t border-[var(--border-primary)] py-[var(--space-4)] sm:flex-row sm:items-center">
          <p className="text-[var(--text-small-size)] text-[var(--text-muted)]">
            &copy; {currentYear} Stravex Technologies. All rights reserved.
          </p>
          <p className="text-[var(--text-small-size)] text-[var(--text-muted)]">
            Engineered in India.
          </p>
        </div>
      </Container>
    </footer>
  );
}
