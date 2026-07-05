/**
 * Homepage.
 *
 * Purpose: Establish Stravex as a serious, credible, engineering-led
 * defence technology company within the first 5 seconds — then route
 * each visitor type toward what they need.
 *
 * Composition layer. All section logic lives in components/home/.
 * This file composes sections with intentional rhythm:
 *
 *  1. Hero          — hero spacing (deliberately emphasized)
 *  2. Capability    — compact spacing (quiet transition)
 *  3. Featured Tech — spacious spacing
 *  4. Philosophy    — default spacing (deliberately quiet)
 *  5. Why Indigenous— default spacing (argument continuation)
 *  6. Proof         — compact spacing (deliberately quiet)
 *  7. Latest News   — spacious spacing
 *  8. Contact CTA   — spacious spacing
 */

import { Divider } from "@/components/ui/Divider";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilityOverview } from "@/components/home/CapabilityOverview";
import { FeaturedTechnology } from "@/components/home/FeaturedTechnology";
import { EngineeringPhilosophy } from "@/components/home/EngineeringPhilosophy";
import { WhyIndigenous } from "@/components/home/WhyIndigenous";
import { ProofSection } from "@/components/home/ProofSection";
import { LatestNews } from "@/components/home/LatestNews";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <CapabilityOverview />
      <Divider />
      <FeaturedTechnology />
      <Divider />
      <EngineeringPhilosophy />
      <Divider />
      <WhyIndigenous />
      <Divider />
      <ProofSection />
      <Divider />
      <LatestNews />
      <Divider />
      <ContactCTA />
    </>
  );
}
