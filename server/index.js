const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/'));
app.use(express.json())
app.listen(port, () => { console.log(`Now listening on ${port}`); });

app.get(/icons/, function(req, res) {
  res.redirect('http://localhost:3001'+req.url);
})

app.get('/restaurants', (req, res) => {
  axios.get('http://localhost:3001/restaurants')
    .then((response) => {
      console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/reservations', (req, res) => {
  axios.get('http://localhost:3002/reservations')
    .then((response) => {
      console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})