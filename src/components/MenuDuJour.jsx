import menu from "../assets/images/menu.webp";
import formules from "../assets/images/Formules.webp";
import boissons from "../assets/images/Boissons.webp";


const MenuDuJour = () => {
    return (
        <div className="menu-container">
            <div className="menu-jour">
                <img src={menu} alt="Image contenant le menu du jour" />
            </div>
            <div className="right">
                <img src={formules} alt="image contenant les formules proposées" />
                <img src={boissons} alt="image contenant un aperçu des boissons proposées" />
            </div>
        </div>
    );
};

export default MenuDuJour;