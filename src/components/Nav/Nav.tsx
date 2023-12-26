import './Nav.scss';
import Link from '../Link/Link';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link text="Home" href="/" />
        </li>
        <li className="nav__item">
          <Link text="Contancs" href="/" />
        </li>
        <li className="nav__item">
          <Link text="Skills" href="/" />
        </li>
        <li className="nav__item">
          <Link text="Prusing" href="/" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;