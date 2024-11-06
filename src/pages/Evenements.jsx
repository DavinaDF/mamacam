import Event from "../components/Event";
import eventData from "../../public/events.json";

const Evenements = () => {
  return (
    <div className="timeline">
      {eventData.map((event, i) => (
        <Event event={event} key={i} />
      ))}
    </div>
  );
};

export default Evenements;
