function Tache({ id, titre, statut, onAvancer, onSupprimer }) {
  return (
    <div className="tache">
      <h3>{titre}</h3>
      <button onClick={() => onAvancer(id)}>✅</button>
      <button onClick={() => onSupprimer(id)}>🗑️</button>
    </div>
  )
}

export default Tache
