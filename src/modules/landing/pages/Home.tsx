import { HeroSection } from '../components/HeroSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { MobileShowcase } from '../components/MobileShowcase';
import { PricingBlock } from '../components/PricingBlock';
import { LeadForm } from '../components/LeadForm';
import { FaqAccordion } from '../components/FaqAccordion';

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