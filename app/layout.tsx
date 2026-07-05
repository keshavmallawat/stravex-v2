/**
 * Root layout for the Stravex Technologies website.
 *
 * Responsibilities:
 * - HTML document structure (lang, meta, fonts)
 * - Global providers (theme, context)
 * - Site-wide Navigation and Footer
 * - Wraps all page content via children
 */

import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Stravex Technologies",
  description:
    "Indian defence technology company — detection, interception, and autonomous defence systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
