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

app.get('/dishes-bundle.js', (req, res) => {
  axios.get('https://yelpfec.s3-us-west-1.amazonaws.com/popular-dishes-bundle/bundle.js')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/restaurants', (req, res) => {
  axios.get('http://localhost:3001/restaurants')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/reservations-bundle.js', (req, res) => {
  axios.get('https://yelpfec.s3-us-west-1.amazonaws.com/reservations-bundle/bundle.js')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/reservations', (req, res) => {
  axios.get('http://localhost:3002/reservations')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/gallery-bundle.js', (req, res) => {
  axios.get('https://yelpfec.s3-us-west-1.amazonaws.com/gallery-bundle/bundle.js')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})

app.get('/gallery', (req, res) => {
  axios.get('http://localhost:3003/images')
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).end;
    })
})