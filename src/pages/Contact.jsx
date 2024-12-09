import photoDeco from "../assets/images/table-tableau-interieur.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p91bcjt", "contact_form", form.current, {
        publicKey: "m8pVCfE9WPOsslQ1e",
      })
      .then(
        () => {
          console.log("Message envoyé avec succès !");
        },
        (error) => {
          console.log("Erreur : ", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="left-side">
        <div className="bloc">
          <h2>Contacter MAMACAM par téléphone</h2>
          <p>
            De 9h30 à 11h30 et de 14h30 à 17h30 :
            <br />
            <strong>09.87.03.83.97</strong>
          </p>
        </div>
        <img
          src={photoDeco}
          alt="Photo d'une table à l'intérieur du restaurant"
        />
      </div>
      <div className="right-side">
        <h2>Contacter MAMACAM par message</h2>
        <ul>
          N’hésitez pas à m’envoyer un message avec le formulaire ci-dessous si
          vous souhaitez :<li>Réserver une table</li>
          <li>Me faire des retours</li>
          <li>Poser des questions</li>
          <li>etc ...</li>
        </ul>
        <form className="traiteur-form" ref={form} onSubmit={sendEmail}>
          <label>
            Nom prénom - ou Société :
            <input id="user_name" type="text" name="from_name" />
          </label>
          <label>
            Message :<textarea name="message" type="text" rows="20"></textarea>
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

export default Contact;
