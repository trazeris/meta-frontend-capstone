import './App.css';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <SpecialsSection />

        <TestimonialsSection />

        <AboutUsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
