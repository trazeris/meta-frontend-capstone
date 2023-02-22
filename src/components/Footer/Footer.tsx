import { NavigationLink } from '../../App';
import PNGLogo from '../../assets/logo footer.png';

import './Footer.styles.css';

interface FooterProps {
  navigationLinks: NavigationLink[];
}

function Footer({ navigationLinks }: FooterProps) {
  return (
    <footer className="page-footer">
      <section className="footer">
        <img alt="Little Lemon Logo" src={PNGLogo} />
        <section className="Doormat">
          <h3>Quick links</h3>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.key}>
                <a href={link.route}>{link.text}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="Contact">
          <h3>Find us</h3>
          <p>Phone Number</p>
          <p>Address</p>
          <p>Email</p>
        </section>
        <section className="Social">
          <h3>Social media links</h3>
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
      </section>
    </footer>
  );
}

export default Footer;
