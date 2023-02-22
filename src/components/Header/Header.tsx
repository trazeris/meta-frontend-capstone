import { Link } from 'react-router-dom';
import SVGLogo from '../../assets/Logo.svg';
import { NavigationLink } from '../../routes/Layout.route';

import './Header.styles.css';

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

function Header({ navigationLinks }: HeaderProps) {
  return (
    <header className="page-header">
      <img alt="Little Lemon Logo" src={SVGLogo} />
      <nav>
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.key}>
              <Link to={link.route}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
