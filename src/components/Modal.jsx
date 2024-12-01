import PropTypes from "prop-types";

const Modal = ({ modalContent, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container">
        <i className="fa-solid fa-circle-xmark" onClick={onClose}></i>
        <img src={modalContent} alt="Fenêtre pour découvrir les détails" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  modalContent: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
