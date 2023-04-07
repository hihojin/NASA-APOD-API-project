const express = require('express')
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
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

module.exports = router;