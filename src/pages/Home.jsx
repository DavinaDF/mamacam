import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Info from "../components/Info";
// import MenuJour from "../components/MenuDuJour";
import homeInfo from "../data/homeInfo.json";
import photoDevanture from "../assets/images/devanture_ouverte.jpg";
import menuJour from "../assets/images/menu.jpg";
import formules from "../assets/images/prix_formules.jpg";
import boissons from "../../src/assets/images/boissons_details.webp";
import imagePlat1 from "../assets/images/photo_plat_1.jpg";
import imagePlat2 from "../assets/images/photo_plat_2.jpg";

const Home = () => {
  const [isVisible, setVisibleModal] = useState(false);
  const [srcModal, setSource] = useState();

  const closeModal = () => {
    setVisibleModal(false);
    setSource(null);
  };

  const handleDisplayModal = (srcImageModal) => {
    setVisibleModal(true);
    setSource(srcImageModal);
  };

  return (
    <div className="home">
      <Banner />
      <div className="container">
        <div className="home-left">
          <div className="home-left-T">
            <Info
              title={"Cantine écoresponsable"}
              subtitle={"Sur place ou à emporter"}
              items={homeInfo}
            />
            <div className="social-link">
              <a
                href="https://www.instagram.com/mamacam_cantine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066390621228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <NavLink
                to="/contact"
                className={(nav) =>
                  nav.isActive ? "nav-active" : "nav-inactive"
                }
              >
                <i className="fa-solid fa-envelope"></i>
              </NavLink>
              <i className="fa-solid fa-map"></i>
            </div>
          </div>
          <div className="home-left-B">
            <img
              src={photoDevanture}
              alt="Photo de la devanture du restaurant Mamacam"
            />
          </div>
        </div>
        <div className="home-right">
          <div className="home-right-L">
            {/* <MenuJour /> */}
            <img src={menuJour} alt="Menu du jour du restaurant Mamacam" />
          </div>
          <div className="home-right-R">
            <img
              src={formules}
              alt="image contenant les formules proposées"
              className="img-formules"
            />
            <button
              className="formules-button"
              onClick={(e) => {
                e.preventDefault();
                handleDisplayModal(formules);
              }}
            >
              FORMULES
            </button>
            <button
              className="bouton_boissons"
              onClick={(e) => {
                e.preventDefault();
                handleDisplayModal(boissons);
              }}
            >
              BOISSONS
            </button>
            <div className="photo_container">
              <img src={imagePlat1} alt="photo d'une plat appétissant" />
              <img src={imagePlat2} alt="photo d'un plat dans un bol" />
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <Modal
          modalContent={srcModal}
          isOpen={isVisible}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Home;
