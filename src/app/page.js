import Hero from '@/components/Hero';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/NavBar';
import TrustedBy from '@/components/TrustedBy';
import Image from 'next/image';
import StackedCards from '@/components/StackedCards';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <TrustedBy />
        <StackedCards />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <CallToAction />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
