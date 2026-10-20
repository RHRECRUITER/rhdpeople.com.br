import { FaqAccordion } from '../components/FaqAccordion';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HeroSection } from '../components/HeroSection';
import { LeadForm } from '../components/LeadForm';
import { MobileShowcase } from '../components/MobileShowcase';
import { PricingBlock } from '../components/PricingBlock';
import { ResourcesSection } from '../components/ResourcesSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <ResourcesSection />
      <FeaturesGrid />
      <MobileShowcase />
      <PricingBlock />
      <LeadForm />
      <FaqAccordion />
    </>
  );
}
