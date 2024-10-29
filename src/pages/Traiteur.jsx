import Info from "../components/Info";
import traiteurInfo from "../data/traiteurInfo.json";
import photoTraiteur1 from "../assets/images/image_traiteur_1.webp";
import photoTraiteur2 from "../assets/images/image_traiteur_2.webp";

const Traiteur = () => {
  return (
    <div className="traiteur">
      <div className="traiteur-left">
        <div className="info">
          <Info
            title={"Prestation de traiteur"}
            subtitle={""}
            items={traiteurInfo}
          />
        </div>
        <div className="photo-container">
          <img
            src={photoTraiteur1}
            alt="Photo prise en extérieur lors d'une prestation de traiteur"
          />
          <img
            src={photoTraiteur2}
            alt="Photo prise en extérieur lors d'une prestation de traiteur"
          />
        </div>
      </div>
      <div className="traiteur-right">
        <h3>
          Pour toute demande prestation traiteur, vous pouvez me contacter par
          téléphone ou via ce fomulaire{" "}
        </h3>
        <ul>
          Merci de donner un maximum de précisions dans le message :
          <li>Nombre de personnes prévues</li>
          <li>Budget</li>
          <li>Type de prestation : buffet ou à l’assiette</li>
          <li>Allergies</li>
          <li>Toute autre information utile</li>
        </ul>
        <form className="traiteur-form">
          <label>
            Nom prénom - ou Société :
            <input id="user_name" type="text" name="user_name" />
          </label>
          <div className="half">
            <label>
              Date de la prestation :
              <input
                className="half"
                type="date"
                placeholder="jj/mm/aaaa"
                name="event_date"
              />
            </label>
            <label>
              Nombre de personnes :
              <input className="half" type="number" name="number_people" />
            </label>
          </div>
          <label>
            Message :<textarea name="message" type="text" rows="10"></textarea>
          </label>
          <input
            className="form_button"
            type="submit"
            value="ENVOYER"
            id="input-submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Traiteur;
