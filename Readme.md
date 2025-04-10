# Insta-Clone 📸

## Description 📝

Insta-Clone est un clone de l'application Instagram construit en **NestJS** pour le backend (le frontend est à déterminer), utilisant une architecture monorepo.

## Structure du projet 📂

Ce projet est organisé comme suit :

-   **Backend** : `back-insta/` (NestJS + PostgreSQL)
-   **Frontend** : `front-insta/` (à determiner)

## Prérequis ⚙️

-   Node.js (version LTS)
-   Docker (pour déployer en local avec Docker)

## Installation 🚀

### Cloner le repository 💻

```bash
git clone https://github.com/<votre-utilisateur>/insta-clone.git
cd insta-clone
```

### Backend 🔙

1. Allez dans le dossier du backend :
    ```bash
    cd back-insta
    ```
2. Installez les dépendances :
    ```bash
    npm install
    ```
3. Créez un fichier `.env` à partir de `.env.example` et configurez les variables d'environnement.

    Exemple pour PostgreSQL dans `.env` :

    ```env
    DATABASE_URL=postgres://user:password@localhost:<PORT>/{instaclone->A CHANGER}
    ```

4. Lancez l'application :
    ```bash
    npm run start
    ```

### Frontend ➡️

1. Allez dans le dossier du frontend :
    ```bash
    cd front-insta
    ```
2. Installez les dépendances :
    ```bash
    npm install
    ```
3. Lancez l'application :
    ```bash
    npm start
    ```

### Docker (facultatif) 🐳

Pour utiliser Docker et déployer le projet en local avec une base de données, exécutez :

```bash
docker-compose up
```

Cela démarre les services backend, frontend et la base de données PostgreSQL dans des conteneurs Docker.

## Structure des Dossiers 📜

Voici la structure du projet :

```
insta-clone/
├── back-insta/             # Dossier pour le backend
│   ├── src/                # Code source du backend
│   ├── dist/               # Dossier de sortie (après compilation)
│   ├── package.json        # Dépendances et scripts du backend
│   └── .env.example        # Exemple de fichier d'environnement pour le backend
├── front-insta/            # Dossier pour le frontend
│   ├── src/                # Code source du frontend
│   ├── public/             # Fichiers statiques pour React
│   ├── package.json        # Dépendances et scripts du frontend
│   └── .env.example        # Exemple de fichier d'environnement pour le frontend
├── .gitignore              # Ignorer les fichiers inutiles
├── README.md               # Documentation principale du projet
└── docker-compose.yml      # Fichier de configuration Docker
```

## Roadmap 📍

### Version 1.0
- Gestion utilisateur (Inscription, Connexion, OAuth2) `nestJs`
- Gestion des publications (créer, modifier, supprimer des posts) `nestJs`

### Version 2.0
- Mode sombre
- Notifications en temps réel
- Messagerie directe