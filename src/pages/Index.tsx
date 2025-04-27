
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialSection from '@/components/TestimonialSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
