import PropTypes from "prop-types";

const Info = ({ title, subtitle, items }) => {
  return (
    <div className="infos">
      <div className="info-titre">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="info-container">
        {items.map((item, i) => (
          <div className="info-item" key={i}>
            <i className={item.icon}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;

Info.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
