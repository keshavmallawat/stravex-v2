/**
 * Site-wide navigation component.
 *
 * Responsibilities:
 * - Primary nav links: Home / Technologies / Products / About / Team / News / Contact
 * - Segment-aware CTA in nav bar (e.g., "Partner with us") — persists
 *   to reduce clicks-to-inquiry for highest-value visitor types
 * - Responsive: mobile hamburger menu, desktop horizontal nav
 * - Active state highlighting for current route
 * - Uses Next.js Link for client-side navigation
 *
 * Order rationale: Technologies before Products lets technical/investor
 * visitors self-select into depth before the commercial pitch.
 */

export function Navigation() {
  return <nav>{/* TODO: Logo, nav links, segmented CTA, mobile menu */}</nav>;
}
