import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Info from "../components/Info";
import traiteurInfo from "../data/traiteurInfo.json";
import photoTraiteur1 from "../assets/images/image_traiteur_1.webp";
import photoTraiteur2 from "../assets/images/image_traiteur_2.webp";

const Traiteur = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p91bcjt", "traiteur_form", form.current, {
        publicKey: "m8pVCfE9WPOsslQ1e",
      })
      .then(
        () => {
          setMessage("Votre demande a bien été envoyé !");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        },
        () => {
          setMessage("Une erreur est survenue, veuillez réessaye.");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

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
        <div className="form-container">
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
          <form className="traiteur-form" ref={form} onSubmit={sendEmail}>
            <label>
              Nom prénom - ou Société :
              <input id="user_name" type="text" name="user_name" required />
            </label>
            <label>
              Adresse mail :
              <input id="user_mail" type="email" name="user_email" required />
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
              Message :
              <textarea
                name="message"
                type="text"
                rows="10"
                required
              ></textarea>
            </label>
            {message && <p>{message}</p>}
            <input
              className="form_button"
              type="submit"
              value="ENVOYER"
              id="input-submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Traiteur;
