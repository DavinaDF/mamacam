import { useEffect, useState } from "react";

function MenuDuJour() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Charge l'iframe seulement une fois le composant monté
    setIframeLoaded(true);
  }, []);

  return (
    <div className="menu-container">
      {iframeLoaded && (
        <iframe
          src="https://www.canva.com/design/DAEeBArgL-Q/XVpKwnYmuCIFqxULuvDQAA/view?embed"
          title="Menu du jour"
          // frameBorder="0" // Utilise "frameBorder" au lieu de "border" qui pourrait provoquer un avertissement.
          // style={{ width: "100%", height: "600px" }} // Assure une bonne responsivité.
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default MenuDuJour;

// const MenuDuJour = () => {
//   return (
//     <div className="menu-container">
//       {/* <iframe
//         className="menu-canva"
//         sandbox="allow-same-origin allow-scripts allow-modals allow-forms"
//         loading="eager"
//         src="https://www.canva.com/design/DAEeBArgL-Q/XVpKwnYmuCIFqxULuvDQAA/view?embed"
//       ></iframe> */}
//       {/* <img
//         src="https://www.canva.com/design/DAGWT14QPmE/HHy3ik2ep5TGdluJGKjgIw/view"
//         alt=""
//       /> */}
//       <iframe
//         loading="lazy"
//         src="https://www.canva.com/design/DAGWT14QPmE/HHy3ik2ep5TGdluJGKjgIw/view?embed"
//         allow="fullscreen"
//         sandbox="allow-scripts allow-same-origin allow-modals"
//       ></iframe>
//     </div>
//   );
// };
