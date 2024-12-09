// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo_header_desktop.png";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-container">
//         <div className="nav-mobile">
//           <div className="logo">
//             <img src={logo} alt="logo Mamacam haut de page" />
//           </div>
//           <i className="fa-solid fa-bars menu-button"></i>
//           <div className="menu-links"></div>
//         </div>
//         <div className="header-nav-left">
//           <NavLink
//             to="/"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Menu</h2>
//           </NavLink>
//           <NavLink
//             to="/traiteur"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Traiteur</h2>
//           </NavLink>
//           <NavLink
//             to="/evenements"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Evènements</h2>
//           </NavLink>
//         </div>
//         <div className="header-logo">
//           <img src={logo} alt="logo Mamacam haut de page" />
//         </div>
//         <div className="header-nav-right">
//           <NavLink
//             to="/about"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Valeurs</h2>
//           </NavLink>
//           <NavLink
//             to="/partenaires"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Partenaires</h2>
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}
//           >
//             <h2>Contact</h2>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo_header_desktop.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-container">
        <div className="nav-mobile">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo Mamacam haut de page" />
            </Link>
          </div>
          <i
            className="fa-solid fa-bars menu-button"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          {isOpen && (
            <div className="menu-links" onClick={() => setIsOpen(!isOpen)}>
              <NavLink to="/" className="nav-mobile-item">
                <h2>Menu</h2>
              </NavLink>
              <NavLink to="/traiteur" className="nav-mobile-item">
                <h2>Traiteur</h2>
              </NavLink>
              <NavLink to="/evenements" className="nav-mobile-item">
                <h2>Evènements</h2>
              </NavLink>
              <NavLink to="/about" className="nav-mobile-item">
                <h2>Valeurs</h2>
              </NavLink>
              <NavLink to="/partenaires" className="nav-mobile-item">
                <h2>Partenaires</h2>
              </NavLink>
              <NavLink to="/contact" className="nav-mobile-item">
                <h2>Contact</h2>
              </NavLink>
            </div>
          )}
        </div>
        <div className="nav-desktop">
          <div className="header-nav-left">
            <NavLink
              to="/"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Menu</h2>
            </NavLink>
            <NavLink
              to="/traiteur"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Traiteur</h2>
            </NavLink>
            <NavLink
              to="/evenements"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Evénements</h2>
            </NavLink>
          </div>
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="logo Mamacam haut de page" />
            </Link>
          </div>
          <div className="header-nav-right">
            <NavLink
              to="/about"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Valeurs</h2>
            </NavLink>
            <NavLink
              to="/partenaires"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Partenaires</h2>
            </NavLink>
            <NavLink
              to="/contact"
              className={(nav) =>
                nav.isActive ? "nav-active" : "nav-inactive"
              }
            >
              <h2>Contact</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
