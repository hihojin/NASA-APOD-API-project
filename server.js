const express = require('express');
const cors = require('cors');
const axios = require('axios');
const login = require('./login');
const register = require('./signup');
const mongoose = require('mongoose');
require('dotenv').config(); // to use the api key from .env file

let mongoEndpoint = 'mongodb://127.0.0.1/project_app';
if (process.env.MONGO) {
    mongoEndpoint = process.env.MONGO;
}
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/login/', login);
app.use('/api/signup/', register);

app.get('/', function(req, res) {
    const options = {
        method: 'GET',
        url: `https://api.nasa.gov/planetary/apod?api_key=${ process.env.API_KEY}`,
        headers: {
            'nasa-host': 'api.nasa.gov/planetary/apod',
            'api-key': process.env.API_KEY
        }
    }

    axios.request(options).then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(8000, function () {
    console.log('Starting server');
  });