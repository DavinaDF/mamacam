import photoDeco from "../assets/images/table-tableau-interieur.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p91bcjt", "contact_form", form.current, {
        publicKey: "m8pVCfE9WPOsslQ1e",
      })
      .then(
        () => {
          setMessage("Votre message a bien été envoyé !");
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
            <input id="user_name" type="text" name="from_name" required />
          </label>
          <label>
            Adresse mail :
            <input id="user_mail" type="email" name="user_email" required />
          </label>
          <label>
            Message :
            <textarea name="message" type="text" rows="14" required></textarea>
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
  );
};

export default Contact;
