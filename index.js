'use strict';

const Http = require('http');
const RequestTransformer = require('./transformer.js');

// Crée un serveur HTTP
// Le serveur écoute sur le port défini dans l'environement ou le 8989 par défault
const PORT = process.env.PORT || 8989;
const server = Http.createServer().listen(PORT);
console.log(`Le serveur est prêt et écoute sur le port ${PORT}`);

// Fonction a exécuter à chaque requête reçue
server.on('request', (req, res) => {
  if(req.method == 'POST') {
    req.pipe(new RequestTransformer()).pipe(res);
  } else {
    res.end('Je ne sais rien faire en GET, mais envoyez moi plutôt des données en POST :)');
  }
});
