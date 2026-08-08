import { FaqAccordion } from '../components/FaqAccordion';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HeroSection } from '../components/HeroSection';
import { LeadForm } from '../components/LeadForm';
import { MobileShowcase } from '../components/MobileShowcase';
import { PricingBlock } from '../components/PricingBlock';

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <MobileShowcase />
      <PricingBlock />
      <LeadForm />
      <FaqAccordion />
    </>
  );
}
