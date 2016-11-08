# atelier-node-1
Téléphone arabe avec les streams Node.js

Atelier réalisé avec [![Silex Labs](https://www.silexlabs.org/wp-content/uploads/2015/10/silexlabs.org_.2015.png)](https://www.silexlabs.org/event/atelier-node-js-ring/) et l'école Simplon.

# But de l'atelier

Lors de cet atelier, chaque participant créera un maillon (serveur HTTP) qui recevra des données d'un maillon précédent et les renverra modifiées (ou non) au maillon suivant.

# Installation

* Cloner le dossier : `git clone https://github.com/JbIPS/atelier-node-1.git`
* Installer les dépendances: `npm install`
* Lancer: `npm start` !

# Organisation du dossier

### package.json

Il regroupe les informations de ce dossier. Vous n'avez pas à le modifier. Pour en savoir plus sur son format, consultez la [documentation NPM](https://docs.npmjs.com/files/package.json).

### index.js

C'est le point d'entrée (début) du programme. Il va crée un serveur HTTP prêt à recevoir des requêtes et à y répondre. Vous pourrez y ajouter des modifications pour personaliser le comportment de votre maillon.

### transformer.js

C'est dans ce fichier que va s'opérer la transformation. Il expose la classe `RequestTransformer` que vous devrez modifier pour appliquer vos transformations.
