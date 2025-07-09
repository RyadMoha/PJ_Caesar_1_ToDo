import { useState, useEffect } from 'react'
import Tache from './tache'
import './App.css'

function App() {
  // 🧠 On remplace la valeur par défaut par un chargement depuis localStorage
  const [taches, setTaches] = useState(() => {
    const sauvegarde = localStorage.getItem("taches")
    return sauvegarde ? JSON.parse(sauvegarde) : []
  })

  // ✍️ Texte tapé dans le champ d'ajout
  const [nouvelleTache, setNouvelleTache] = useState("")

  // 💾 Sauvegarde automatique des tâches dans localStorage
  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches))
  }, [taches])

  // ➕ Fonction pour ajouter une tâche à la liste
  function ajouterTache() {
    if (nouvelleTache.trim() === "") return

    const nouvelle = {
      id: Date.now(),
      titre: nouvelleTache,
      statut: "a_faire" // Nouvelle tâche commence en "à faire"
    }

    setTaches([...taches, nouvelle])
    setNouvelleTache("")
  }

  // 🔁 Fonction pour faire passer une tâche à l'étape suivante
  function avancerStatut(id) {
    const tachesModifiees = taches.map(tache => {
      if (tache.id !== id) return tache

      let nouveauStatut
      if (tache.statut === "a_faire") nouveauStatut = "en_cours"
      else if (tache.statut === "en_cours") nouveauStatut = "termine"
      else if (tache.statut === "termine") nouveauStatut = "a_faire"

      return { ...tache, statut: nouveauStatut }
    })

    setTaches(tachesModifiees)
  }

  // 🗑️ Fonction pour supprimer une tâche
  function supprimerTache(id) {
    const nouvellesTaches = taches.filter(tache => tache.id !== id)
    setTaches(nouvellesTaches)
  }

  return (
    <div className="container">
      <h1>Ma To-do List</h1>

      {/* 🧾 Formulaire d'ajout */}
      <div>
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>

      {/* 📋 Colonnes des tâches */}
      <div className="colonnes">
        {/* Colonne À faire */}
        <div className="colonne">
          <h2>À faire</h2>
          {taches
            .filter(t => t.statut === "a_faire")
            .map(tache => (
              <Tache
                key={tache.id}
                id={tache.id}
                titre={tache.titre}
                statut={tache.statut}
                onAvancer={avancerStatut}
                onSupprimer={supprimerTache}
              />
            ))}
        </div>

        {/* Colonne En cours */}
        <div className="colonne">
          <h2>En cours</h2>
          {taches
            .filter(t => t.statut === "en_cours")
            .map(tache => (
              <Tache
                key={tache.id}
                id={tache.id}
                titre={tache.titre}
                statut={tache.statut}
                onAvancer={avancerStatut}
                onSupprimer={supprimerTache}
              />
            ))}
        </div>

        {/* Colonne Terminé */}
        <div className="colonne">
          <h2>Terminé</h2>
          {taches
            .filter(t => t.statut === "termine")
            .map(tache => (
              <Tache
                key={tache.id}
                id={tache.id}
                titre={tache.titre}
                statut={tache.statut}
                onAvancer={avancerStatut}
                onSupprimer={supprimerTache}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
