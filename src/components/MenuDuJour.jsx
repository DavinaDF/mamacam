import { useEffect, useState } from "react";
import { getLatestMenu } from "../services/menuService";

const MenuDuJour = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const latestMenu = await getLatestMenu();
        setMenu(latestMenu);
      } catch (error) {
        console.error("Erreur lors de la récupération du menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      {menu ? (
        <img
          src={`${import.meta.env.VITE_API_URL}${menu.imageUrl}`}
          alt={menu.fileName}
        />
      ) : (
        <p>Chargement du menu...</p>
      )}
    </div>
  );
};

export default MenuDuJour;
