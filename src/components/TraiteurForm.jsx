const TraiteurForm = () => {
  return (
    <div>
      {" "}
      <form className="traiteur-form">
        {" "}
        <div className="half left cf">
          {" "}
          <label>
            Nom prénom - ou Société :
            <input id="user_name" type="text" name="user_name" />{" "}
          </label>{" "}
          <label>
            Date de la prestation :
            <input type="date" placeholder="jj/mm/aaaa" name="event_date" />
          </label>
        </div>{" "}
        <div className="half right cf">
          {" "}
          <textarea
            name="message"
            type="text"
            placeholder="Message"
          ></textarea>{" "}
        </div>{" "}
        <input type="submit" value="Submit" id="input-submit" />{" "}
      </form>{" "}
    </div>
  );
};

export default TraiteurForm;
