/**
 * Site-wide navigation component.
 *
 * Responsibilities:
 * - Primary nav links: Home / Technologies / Products / About / Team / News / Contact
 * - Persistent CTA in nav bar ("Partner with us") — reduces clicks-to-inquiry
 *   for highest-value visitor types
 * - Responsive: mobile hamburger menu, desktop horizontal nav
 * - Sticky: fixed at top, background appears on scroll
 * - Active state highlighting for current route
 * - Accessible: keyboard navigation, aria labels, focus management, focus trap
 * - Semantic: <header>, <nav>, proper ARIA landmarks
 *
 * This is a "use client" component because it requires:
 * - useState for mobile menu open/close
 * - useEffect for scroll-aware background and focus trap
 * - usePathname for active route detection
 */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavLinks, persistentCta } from "@/lib/navigation";

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Scroll-aware background via event listener
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus trap for mobile menu
  const trapFocus = useCallback(
    (e: KeyboardEvent) => {
      if (!mobileOpen || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [mobileOpen],
  );

  // Escape key to close mobile menu
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen],
  );

  // Manage focus trap and escape key listeners
  useEffect(() => {
    if (mobileOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", trapFocus);
      document.addEventListener("keydown", handleEscape);

      // Focus first link in menu after render
      requestAnimationFrame(() => {
        const firstLink = menuRef.current?.querySelector<HTMLElement>("a");
        firstLink?.focus();
      });
    }

    return () => {
      document.removeEventListener("keydown", trapFocus);
      document.removeEventListener("keydown", handleEscape);

      // Restore focus when menu closes
      if (!mobileOpen && previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
    };
  }, [mobileOpen, trapFocus, handleEscape]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-[var(--z-sticky)] transition-colors",
        scrolled
          ? "bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-primary)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--space-section-sm)] max-w-[var(--container-xl)] items-center justify-between px-[var(--space-4)] md:px-[var(--space-6)]">
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--text-body-size)] font-[var(--font-weight-semibold)] text-[var(--text-primary)] tracking-[var(--letter-spacing-wide)] transition-colors hover:text-[var(--interactive-primary)]"
          aria-label="Stravex Technologies — Home"
        >
          STRAVEX
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-[var(--space-6)] md:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex list-none items-center gap-[var(--space-5)]">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[var(--text-small-size)] transition-colors",
                    isActive(link.href)
                      ? "text-[var(--text-primary)] font-[var(--font-weight-medium)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Persistent CTA */}
          <Link
            href={persistentCta.href}
            className="rounded-[var(--radius-sm)] border border-[var(--border-primary)] bg-[var(--surface-primary)] px-[var(--space-4)] py-[var(--space-2)] text-[var(--text-small-size)] font-[var(--font-weight-medium)] text-[var(--text-primary)] transition-colors hover:border-[var(--interactive-primary)] hover:bg-[var(--surface-secondary)]"
          >
            {persistentCta.label}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center p-[var(--space-2)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.5} className="text-[var(--text-primary)]" />
          ) : (
            <Menu size={24} strokeWidth={1.5} className="text-[var(--text-primary)]" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[var(--space-section-sm)] z-[var(--z-overlay)] bg-[var(--bg-primary)] md:hidden"
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          ref={menuRef}
        >
          <nav
            className="mx-auto max-w-[var(--container-xl)] px-[var(--space-4)] pt-[var(--space-6)]"
            aria-label="Mobile navigation"
          >
            <ul className="flex list-none flex-col gap-[var(--space-1)]">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-[var(--radius-sm)] px-[var(--space-3)] py-[var(--space-3)] text-[var(--text-body-size)] transition-colors",
                      isActive(link.href)
                        ? "bg-[var(--surface-secondary)] text-[var(--text-primary)] font-[var(--font-weight-medium)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-primary)] hover:text-[var(--text-primary)]",
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-[var(--space-6)] border-t border-[var(--border-primary)] pt-[var(--space-6)]">
              <Link
                href={persistentCta.href}
                onClick={closeMobileMenu}
                className="block rounded-[var(--radius-sm)] border border-[var(--border-primary)] bg-[var(--surface-primary)] px-[var(--space-4)] py-[var(--space-3)] text-center text-[var(--text-body-size)] font-[var(--font-weight-medium)] text-[var(--text-primary)] transition-colors hover:border-[var(--interactive-primary)] hover:bg-[var(--surface-secondary)]"
              >
                {persistentCta.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
