function Popup(props) {
  return props ? (
    <div>
      <div className="modal_container">
        <div className="close"></div>
        <div className="content">{props}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
