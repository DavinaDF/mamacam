class MenuManager {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await this.getLatestMenu();
      this.startAutoRefresh();
    } catch (error) {
      console.error("Erreur d'initialisation:", error);
    }
  }

  async getLatestMenu() {
    try {
      const response = await fetch("/api/menu");
      if (!response.ok) throw new Error("Erreur réseau");

      const data = await response.json();
      this.updateMenuDisplay(data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  }

  updateMenuDisplay(data) {
    const menuImg = document.getElementById("menu-canva");
    const lastUpdate = document.getElementById("last-update");

    menuImg.src = data.imageUrl;

    const updateDate = new Date(data.lastUpdate);
    lastUpdate.textContent = `Dernière mise à jour: ${updateDate.toLocaleString(
      "fr-FR"
    )}`;
  }

  startAutoRefresh(intervalMinutes = 5) {
    setInterval(() => this.getLatestMenu(), intervalMinutes * 60 * 1000);
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  new MenuManager();
});
