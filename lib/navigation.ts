/**
 * Shared navigation constants.
 *
 * Single source of truth for all navigation and footer link data.
 * Both Navigation.tsx and Footer.tsx import from this file.
 *
 * Adding a new route requires updating ONLY this file.
 */

export const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/technologies", label: "Technologies" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const persistentCta = {
  href: "/contact?category=partnership",
  label: "Partner with us",
} as const;

export const footerGroups = [
  {
    heading: "Navigation",
    links: mainNavLinks,
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Stravex" },
      { href: "/team", label: "Engineering Team" },
      { href: "/news", label: "Latest Updates" },
      { href: "/contact?category=careers", label: "Careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
    ],
  },
] as const;
