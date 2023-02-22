import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

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

function Layout() {
  return (
    <>
      <Header navigationLinks={navigationLinks} />

      <main>
        <Outlet />
      </main>

      <Footer navigationLinks={navigationLinks} />
    </>
  );
}

export default Layout;
