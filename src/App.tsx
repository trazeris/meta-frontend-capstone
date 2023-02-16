import './App.css';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';

export interface NavigationLink {
  key: string;
  text: string;
  route: string;
}
const navigationLinks: NavigationLink[] = [
  {
    key: 'home',
    text: 'Home',
    route: '#',
  },
  {
    key: 'about',
    text: 'About',
    route: '#',
  },
  {
    key: 'menu',
    text: 'Menu',
    route: '#',
  },
  {
    key: 'book',
    text: 'Reservations',
    route: '#',
  },
  {
    key: 'order',
    text: 'Order Online',
    route: '#',
  },
  {
    key: 'login',
    text: 'Login',
    route: '#',
  },
];

function App() {
  return (
    <>
      <Header navigationLinks={navigationLinks} />

      <main>
        <HeroSection />

        <SpecialsSection />

        <TestimonialsSection />

        <AboutUsSection />
      </main>

      <Footer navigationLinks={navigationLinks} />
    </>
  );
}

export default App;
