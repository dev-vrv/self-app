import "./Nav.scss";
import { BaseLink, RoutingLink } from "../Links/Links";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <RoutingLink to="/" className="link">
                        Home
                    </RoutingLink>
                </li>
                <li className="nav__item">
                    <RoutingLink to="/contacts" className="link">
                        Contacts
                    </RoutingLink>
                </li>
                <li className="nav__item">
                    <RoutingLink to="/about" className="link">
                        About
                    </RoutingLink>
                </li>
                <li className="nav__item">
                    <RoutingLink to="/services" className="link">
                        Services
                    </RoutingLink>
                </li>
                <li className="nav__item gap-2 fs-4">
                    {/* Github */}
                    <BaseLink to="/">
                        <FaGithub />
                    </BaseLink>
                    {/* Instagram */}
                    <BaseLink to="/">
                        <FaInstagram />
                    </BaseLink>
                    {/* Telegram */}
                    <BaseLink to="/">
                        <FaTelegram />
                    </BaseLink>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
