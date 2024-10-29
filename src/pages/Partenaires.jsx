import Info from "../components/Info";
import partenaireInfo from "../data/partenaireInfo.json";
import photoThe from "../assets/images/thes.png";
import photoKombucha from "../assets/images/kombucha.png";

const Partenaires = () => {
  return (
    <div className="partenaires">
      <div className="left-side">
        <Info
          title={"Partenaires alimentaires"}
          subtitle={""}
          items={partenaireInfo}
        />
      </div>
      <div className="right-side">
        <div className="photo-container">
          <img
            src={photoKombucha}
            alt="Photo de plusieurs bouteilles de Kombucha"
          />
          <img src={photoThe} alt="Photo d'une tasse de thé" />
        </div>
        <div className="bloc">
          <h2>Monnaie Locale</h2>
          <p>
            Chez Mamacam, il est possible de régler en Gemmes et en e-Gemmes
          </p>
        </div>
        <div className="bloc">
          <h2>Compost</h2>
          <p>Le compost est récupéré chaque semaine par Bicycompost</p>
        </div>
        <div className="bloc">
          <h2>Energie</h2>
          <p>Le contrat électricité est souscrit chez Enercoop</p>
        </div>
      </div>
    </div>
  );
};

export default Partenaires;
