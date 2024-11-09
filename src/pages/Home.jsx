import { useState } from "react";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Info from "../components/Info";
import MenuJour from "../components/MenuDuJour";
import homeInfo from "../data/homeInfo.json";
import photoDevanture from "../assets/images/devanture_ouverte.jpg";
import formules from "../assets/images/prix_formules.jpg";
import boissons from "../../src/assets/images/boissons_details.webp";
import imagePlat1 from "../assets/images/photo_plat_1.jpg";
import imagePlat2 from "../assets/images/photo_plat_2.jpg";

const Home = () => {
  const [isVisible, setVisibleModal] = useState(false);

  const closeModal = () => {
    setVisibleModal(false);
  };

  const handleDisplayModal = () => {
    setVisibleModal(true);
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
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-solid fa-envelope"></i>
              <i className="fa-solid fa-phone"></i>
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
            <MenuJour />
          </div>
          <div className="home-right-R">
            <img src={formules} alt="image contenant les formules proposées" />
            <button
              className="bouton_boissons"
              onClick={(e) => {
                e.preventDefault();
                handleDisplayModal();
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
          modalContent={boissons}
          isOpen={isVisible}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Home;
