/**
 * Contact page.
 *
 * Purpose: Convert qualified intent into the right conversation, fast,
 * without friction — and filter out low-value inbound.
 *
 * Section hierarchy:
 *  1. Framing statement (who should contact Stravex)
 *  2. Inquiry category selector (Partnership / Government & Defence /
 *     Press / Careers / General)
 *  3. Contact form (fields adapt to category selected)
 *  4. Direct info (email, registered office — formal, minimal)
 *  5. Expected response time / next steps
 *  6. Map/location (only if a real office exists — omit otherwise)
 *
 * Category-first prevents generic inbound producing unusable inquiries.
 * No live chat widgets, no "Book a demo in 15 minutes" energy.
 */

export default function ContactPage() {
  return (
    <section>
      <h1>Contact</h1>
      {/* TODO: Category selector, form, direct info, response expectations */}
    </section>
  );
}
