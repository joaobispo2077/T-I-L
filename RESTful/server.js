const express = require('express');

const data = require('./data.json');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('server is running at port 3000'))

app.get('/clients', (req, res) => {
  !data.length != 0 ? res.status(400).json('vish'):
   res.status(200).json(data);
});

app.get('/clients/:id', (req, res) => {
  const { id } = req.params;
  
//const client = data.filter((client) => client.id == id);
  const client = data.find((client) => client.id == id);

  !client ? res.status(204).json('Oops!') :
  res.status(200).json(client);

});

app.post('/clients', (req, res) => {
  const { name, email } = req.body;

  //Save logistic

  res.status(201).json({ name, email });
});
app.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const client = data.find((client) => client.id == id);

  client.name = name;

  !client ? res.status(404).json('vish') :
  res.status(200).json({ client });
});
app.delete('/clients/:id', (req, res) => {
  const { id } = req.params;

  const clientsFiltered = data.filter((client) => client.id == id);

  res.status(200).json(clientsFiltered);
});