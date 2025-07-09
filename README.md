# 🏛️ Caesar — To-do List React (Bloc 1 du CRM Freelance)

Caesar est le **projet de base** de mon futur projet, codé étape par étape pour **apprendre React de manière concrète et durable**.

Ce projet correspond au **Bloc 1** de ma roadmap :  
> 👉 Comprendre et maîtriser **React + JSX**, les `props`, `useState`, les événements, et la logique de composants.

---

## 🎯 Objectif pédagogique

- ✅ Apprendre à construire une interface interactive avec React
- ✅ Manipuler des données dynamiques avec `useState`
- ✅ Gérer des événements utilisateur (`onClick`, `onChange`)
- ✅ Utiliser `localStorage` pour conserver les données
- ✅ Structurer son code en composants réutilisables
- ✅ Organiser visuellement son app en colonnes (Kanban-like)
- ✅ Styliser l’interface avec un thème **mode nuit**

---

## 🛠️ Fonctionnalités

- 📝 Ajouter une tâche
- ✅ Marquer une tâche comme faite (cycle : à faire → en cours → terminé → à faire)
- 🗑️ Supprimer une tâche
- 📦 Affichage dans **3 colonnes** selon le statut
- 💾 Sauvegarde automatique dans `localStorage`
- 🌒 Interface en **dark mode** propre et lisible
- ✨ Animation d’apparition des tâches

---

## 📂 Structure du code

- `App.jsx` : composant principal (logique, état global, rendu)
- `Tache.jsx` : composant réutilisable pour chaque tâche
- `App.css` : style global + dark mode

---

## ▶️ Lancer le projet en local

1. Cloner le repo :

```bash
git clone https://github.com/ton-utilisateur/caesar-todo.git
cd caesar-todo
```

2. CInstaller les dépendances :

```bash
npm install
```

3. Lancer le serveur local :

```bash
npm run dev
```

## Ajouts possbiles :

- Drag & Drop
- Authentification
- Supprimer le cache
