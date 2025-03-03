import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5173";

export const getLatestMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/menu`);
    return response.data;
  } catch (error) {
    console.error("Erreur service:", error);
    throw error;
  }
};
