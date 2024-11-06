const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
const mongoDBURI = "mongodb://localhost:27017/port_folio";
mongoose
  .connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB: ", err));

// Middleware
app.use(express.json());

// Modèle Projet
const ProjetSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  lien: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    required: true,
  },
  image: {
    type: String, // Champ pour l'URL de l'image
    required: false, // Optionnel, selon tes besoins
  },
});
const Projet = mongoose.model("Projet", ProjetSchema);

// Modèle Vidéo
const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL de l'image
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true, // URL de la vidéo
  },
  date: {
    type: Date,
    default: Date.now, // Date d'ajout de la vidéo
  },
});

const Video = mongoose.model("Video", VideoSchema);

// Routes Projets

// Créer un nouveau projet
app.post("/api/projets", async (req, res) => {
  try {
    const { titre, description, technologies, lien, date, userId, image } =
      req.body;
    const projet = new Projet({
      titre,
      description,
      technologies,
      lien,
      date,
      userId,
      image, // Ajout du champ image
    });
    await projet.save();
    res.status(201).json(projet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Récupérer tous les projets
app.get("/api/projets", async (req, res) => {
  try {
    const projets = await Projet.find(); // Récupère tous les projets
    res.json(projets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer projets par utilisateur
app.get("/api/projets/utilisateur/:id", async (req, res) => {
  try {
    const projets = await Projet.find({ userId: req.params.id });
    res.json(projets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier un projet
app.patch("/api/projets/:id", getProjet, async (req, res) => {
  if (req.body.titre != null) {
    res.projet.titre = req.body.titre;
  }
  if (req.body.description != null) {
    res.projet.description = req.body.description;
  }
  if (req.body.technologies != null) {
    res.projet.technologies = req.body.technologies;
  }
  if (req.body.lien != null) {
    res.projet.lien = req.body.lien;
  }
  if (req.body.date != null) {
    res.projet.date = req.body.date;
  }
  if (req.body.image != null) {
    // Ajout pour le champ image
    res.projet.image = req.body.image;
  }

  try {
    const updatedProjet = await res.projet.save();
    res.json(updatedProjet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprimer un projet
app.delete("/api/projets/:id", getProjet, async (req, res) => {
  try {
    await res.projet.remove();
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware pour récupérer un projet par ID
async function getProjet(req, res, next) {
  let projet;
  try {
    projet = await Projet.findById(req.params.id);
    if (projet == null) {
      return res
        .status(404)
        .json({ message: "Impossible de trouver le projet" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.projet = projet;
  next();
}

// Routes Vidéos

// Ajouter une vidéo
app.post("/api/videos", async (req, res) => {
  try {
    const { title, image, description, url } = req.body;
    const video = new Video({ title, image, description, url });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Récupérer toutes les vidéos
app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer une vidéo par ID
app.get("/api/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Vidéo non trouvée" });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier une vidéo
app.patch("/api/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Vidéo non trouvée" });
    }

    // Mettre à jour les champs
    if (req.body.title != null) {
      video.title = req.body.title;
    }
    if (req.body.image != null) {
      video.image = req.body.image;
    }
    if (req.body.description != null) {
      video.description = req.body.description;
    }
    if (req.body.url != null) {
      video.url = req.body.url;
    }

    const updatedVideo = await video.save();
    res.json(updatedVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprimer une vidéo
app.delete("/api/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Vidéo non trouvée" });
    }

    await video.remove();
    res.json({ message: "Vidéo supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
