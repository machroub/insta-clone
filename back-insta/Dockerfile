# 1. Utiliser une image officielle Node.js
FROM node:18

# 2. Définir le répertoire de travail dans le c<<<<<<<<onteneur
WORKDIR /app

# 3. Copier le fichier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# 4. Copier tout le code source
COPY . .

# 5. Exposer le port 3000
EXPOSE 3000

# 6. Démarrer l’application
CMD ["npm", "run", "start:dev"]
