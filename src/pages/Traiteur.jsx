import Info from "../components/Info";
import traiteurInfo from "../data/traiteurInfo.json";

const Traiteur = () => {
  return (
    <div className="traiteur">
      <div className="traiteur-left">
        <Info
          title={"Prestation de traiteur"}
          subtitle={""}
          items={traiteurInfo}
        />
        <div className="photo-container"></div>
      </div>
      <div className="traiteur-right">
        <h3></h3>
      </div>
    </div>
  );
};

export default Traiteur;
