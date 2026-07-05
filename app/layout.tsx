/**
 * Root layout for the Stravex Technologies website.
 *
 * Responsibilities:
 * - HTML document structure (lang, meta, fonts)
 * - Global metadata (title templates, OG, Twitter, robots)
 * - Typography via next/font (Inter, JetBrains Mono)
 * - Site-wide SkipLink, Navigation, and Footer
 * - Wraps all page content via children
 * - Landmark structure: <header>, <main>, <footer>
 *
 * Design Constitution §4.16: Accessibility is a completion criterion
 * on every phase, never a separate pass done at the end.
 */

import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SkipLink } from "@/components/ui/SkipLink";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Stravex Technologies — Detection, Interception, Autonomous Defence",
    template: "%s | Stravex Technologies",
  },
  description:
    "Indian defence technology company — detection, interception, and autonomous defence systems engineered for operational conditions.",
  authors: [{ name: "Stravex Technologies" }],
  creator: "Stravex Technologies",
  publisher: "Stravex Technologies",
  metadataBase: new URL("https://stravex.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Stravex Technologies",
    title: "Stravex Technologies — Detection, Interception, Autonomous Defence",
    description:
      "Indian defence technology company — detection, interception, and autonomous defence systems engineered for operational conditions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stravex Technologies — Detection, Interception, Autonomous Defence",
    description:
      "Indian defence technology company — detection, interception, and autonomous defence systems engineered for operational conditions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://stravex.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <SkipLink />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
