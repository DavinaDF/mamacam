import PropTypes from "prop-types";

const Event = ({ event }) => {
  return (
    <div className={event.moment} id="container">
      <div className="photo">
        <img src={event.image} alt="Image en lien avec l'évènement" />
      </div>
      <div className="content">
        <h3 className="tag">{event.tag}</h3>
        <h2 className="title">{event.title}</h2>
        <h4 className="date">{event.date}</h4>
        <p className="description">{event.description}</p>
        <strong className="price">{event.price}</strong>
      </div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  event: PropTypes.object.isRequired,
};
