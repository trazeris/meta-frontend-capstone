import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import HeroSection from '../components/HeroSection/HeroSection';
import SpecialsSection from '../components/SpecialsSection/SpecialsSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';

function Homepage() {
  return (
    <>
      <HeroSection />

      <SpecialsSection />

      {/* <TestimonialsSection /> */}

      <AboutUsSection />
    </>
  );
}

export default Homepage;
