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
});

const Projet = mongoose.model("Projet", ProjetSchema);

// Routes Projets
app.post("/api/projets", async (req, res) => {
  try {
    const { titre, description, technologies, lien, date, userId } = req.body;
    const projet = new Projet({
      titre,
      description,
      technologies,
      lien,
      date,
      userId,
    });
    await projet.save();
    res.status(201).json(projet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Nouvelle route pour récupérer tous les projets
app.get("/api/projets", async (req, res) => {
  try {
    const projets = await Projet.find(); // Récupère tous les projets
    res.json(projets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/projets/utilisateur/:id", async (req, res) => {
  try {
    const projets = await Projet.find({ userId: req.params.id });
    res.json(projets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

  try {
    const updatedProjet = await res.projet.save();
    res.json(updatedProjet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/api/projets/:id", getProjet, async (req, res) => {
  try {
    await res.projet.remove();
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
