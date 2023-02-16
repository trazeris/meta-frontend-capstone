import { NavigationLink } from '../App';
import PNGLogo from '../assets/logo footer.png';

interface FooterProps {
  navigationLinks: NavigationLink[];
}

function Footer({ navigationLinks }: FooterProps) {
  return (
    <footer>
      <img alt="Little Lemon Logo" src={PNGLogo} />
      <section className="Doormat">
        <h2>Quick links</h2>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.key}>
              <a href={link.route}>{link.text}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="Contact">
        <h2>Find us</h2>
        <p>Phone Number</p>
        <p>Address</p>
        <p>Email</p>
      </section>
      <section className="Social">
        <h2>Social media links</h2>
        <ul>
          <li>
            <a href="http://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="http://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="http://twitter.com">Twitter</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
