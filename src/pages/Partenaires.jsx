import Info from "../components/Info";
import partenaireInfo from "../data/partenaireInfo.json";
import photoThe from "../assets/images/thes.jpg";
import photoKombucha from "../assets/images/kombucha.webp";

const Partenaires = () => {
  return (
    <div className="partenaires">
      <div className="left-side">
        <Info
          title={"Partenaires alimentaires"}
          subtitle={""}
          items={partenaireInfo}
        />
        <img
          src={photoKombucha}
          alt="Photo de plusieurs bouteilles de Kombucha"
        />
      </div>
      <div className="right-side">
        <img src={photoThe} alt="Photo d'une tasse de thé" />
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
