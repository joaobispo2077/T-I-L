const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.send('Hello world!');
});

routes.get('/eletronics/:id', (req, res) => {
  console.table(req.body); // used more to create things
  console.table(req.params); // used more to get/update/remove unique things
  console.table(req.query); // used more to filter things
  res.send('Hello world!');
});

exports.routes = routes;