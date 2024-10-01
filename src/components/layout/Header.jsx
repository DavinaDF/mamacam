import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_header_desktop.png"
 
const Header = () => {
    return (
        <div className="header">
            <div className="header-nav-left">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>Menu</h2>
                </NavLink>
                <NavLink to="/traiteur" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>Traiteur</h2>
                </NavLink>
                <NavLink to="/partenaires" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>Partenaires</h2>
                </NavLink>
            </div>
            <div className="header-logo">
                <img src={logo} alt="logo Mamacam haut de page" />
            </div>
            <div className="header-nav-right">
                <NavLink to="/evenements" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>Evènements</h2>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>A propos</h2>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <h2>Contact</h2>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;