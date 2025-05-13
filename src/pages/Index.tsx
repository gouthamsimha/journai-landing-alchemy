
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeatureGrid from '../components/FeatureGrid';
import MoodTrendDemo from '../components/MoodTrendDemo';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import PricingCTA from '../components/PricingCTA';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

const Index = () => {
  // Check system preference for dark mode on initial load
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeatureGrid />
        <MoodTrendDemo />
        <TestimonialsCarousel />
        <PricingCTA />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
