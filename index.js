'use strict';

const Http = require('http');
const request = require('request');
const RequestTransformer = require('./transformer.js');

const randomWords = ['world', 'Node.js', 'beautiful', 'Silex Labs'];

// Crée un serveur HTTP
// Le serveur écoute sur le port défini dans l'environement ou le 8989 par défault
const PORT = process.env.PORT || 8989;
const server = Http.createServer().listen(PORT);
console.log(`Le serveur est prêt et écoute sur le port ${PORT}`);

// Fonction a exécuter à chaque requête reçue
server.on('request', (req, res) => {
  if(req.method == 'POST') {
    // On envoie le contenu de la requête au transformer
    let stream = req.pipe(new RequestTransformer(null, randomWords));
    // On passe le tout au suivant
    if(req.url !== '/') stream = stream.pipe(request.post(req.url.substr(1)));
    // On oublie pas d'envoyer le resultat au client
    stream.pipe(res);
  } else {
    res.end('Je ne sais rien faire en GET, mais envoyez moi plutôt des données en POST :)');
  }
});
