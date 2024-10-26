import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <NavLink to="/mentions">
            <h4>Mentions légales</h4>
          </NavLink>
          <NavLink to="/about">
            <h4>A propos</h4>
          </NavLink>
          <NavLink to="/contact">
            <h4>Contact</h4>
          </NavLink>
        </div>
        <div className="footer-right">
          2024 - Propriété de © Mamacam - Réalisé par Davina Crahet
        </div>
      </div>
    </footer>
  );
};

export default Footer;
