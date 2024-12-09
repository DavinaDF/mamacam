import { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Info from "../components/Info";
// import MenuJour from "../components/MenuDuJour";
import homeInfo from "../data/homeInfo.json";
import menu from "../assets/images/menu.jpg";
import photoDevanture from "../assets/images/devanture_ouverte.webp";
import formules from "../assets/images/prix_formules.webp";
import boissons from "../../src/assets/images/boissons_details.webp";
import imagePlat1 from "../assets/images/photo_plat_1.webp";
import imagePlat2 from "../assets/images/photo_plat_2.webp";

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
              <Popup
                trigger={
                  <button>
                    <i className="fa-solid fa-map"></i>
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="map-modal">
                    <div className="map-modal-container">
                      <i
                        className="fa-solid fa-circle-xmark "
                        onClick={() => close()}
                      ></i>
                      <div className="map-iframe">
                        <iframe src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=83%20Cr%20Victor%20Hugo,%2033000%20Bordeaux+(Mamacam%20cantine)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                          <a href="https://www.gps.ie/">gps trackers</a>
                        </iframe>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>

              {/* <div className="map-container" style={{ display: "none" }}>
                <div className="map-container-iframe">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=83%20Cr%20Victor%20Hugo,%2033000%20Bordeaux+(Mamacam%20cantine)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps trackers</a>
                  </iframe>
                </div>
              </div> */}
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
            <img src={menu} alt="Menu du jour proposé par Mamacam" />
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
