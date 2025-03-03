import express from "express";
import cors from "cors";
import { google } from "googleapis";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

const app = express();
const PORT = 5173;
const FOLDER_ID = "1rXN80DESiGyL-bPW-fWI4yyD9EOHEVao"; // Remplacez par votre véritable ID de dossier

// Ajoutez ces lignes pour définir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Activez CORS
app.use(cors());

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

// Configuration du compte de service
const auth = new google.auth.GoogleAuth({
  keyFile: `${__dirname}/../client_secret.json`,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

// Route pour obtenir les métadonnées du menu
app.get("/api/menu", async (req, res) => {
  console.log("Route /api/menu atteinte");
  try {
    console.log("Recherche du menu dans le dossier:", FOLDER_ID);
    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and mimeType contains 'image/'`,
      orderBy: "modifiedTime desc",
      pageSize: 1,
      fields: "files(id, name, modifiedTime)",
    });

    console.log("Réponse de Google Drive:", response.data);

    if (response.data.files.length === 0) {
      return res.status(404).json({ error: "Aucun menu trouvé" });
    }

    const file = response.data.files[0];
    console.log("Fichier trouvé:", file);

    const imageUrl = `/api/menu/image/${file.id}`;
    res.json({
      imageUrl,
      lastUpdate: file.modifiedTime,
      fileName: file.name,
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Route pour servir l'image
app.get("/api/menu/image/:fileId", async (req, res) => {
  try {
    const fileId = req.params.fileId;
    const response = await drive.files.get(
      {
        fileId: fileId,
        alt: "media",
      },
      {
        responseType: "stream",
      }
    );

    res.setHeader("Content-Type", response.headers["content-type"]);
    response.data.pipe(res);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image:", error);
    res.status(500).send("Erreur lors de la récupération de l'image");
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
