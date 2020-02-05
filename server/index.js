const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => { console.log(`Now listening on ${port}`); });


/////// Build route handlers \\\\\\\\



app.get('/zackbundle/', (req, res) => {

  //contact API server for componenent 1
  axios.get('/localhost:3001')
    .then((data) => {
      console.log('Successful GET bundle.js from yourself!');
      res.status(200).send(data);
    })
    .catch(() => {
      console.log('Error getting bundle.js from you', err);
      res.status(500).send(err);
    })
})

app.get('/remibundle/', (req, res) => {

  //contact API server for componenent 2
  axios.get('/localhost:3002')
    .then((data) => {
      console.log('Successful GET bundle.js from remi!');
      res.status(200).send(data);
    })
    .catch(() => {
      console.log('Error getting bundel.js from remi', err);
      res.status(500).send(err);
    })
})

app.get('/colebundle/', (req, res) => {

  //contact API server for componenent 3
  axios.get('/localhost:3003')
    .then((data) => {
      console.log('Successful GET bundle.js from cole!');
      res.status(200).send(data);
    })
    .catch(() => {
      console.log('Error getting bundle.js from cole', err);
      res.status(500).send(err);
    })
})
