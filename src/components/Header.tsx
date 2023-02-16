import { NavigationLink } from '../App';
import SVGLogo from '../assets/Logo.svg';

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

function Header({ navigationLinks }: HeaderProps) {
  return (
    <header>
      <nav>
        <img alt="Little Lemon Logo" src={SVGLogo} />
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.key}>
              <a href={link.route}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
