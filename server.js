const express = require('express');
const cors = require('cors');
const register = require('./signup');
const picture = require('./picture');
const signupModel = require('./user_model');
const mongoose = require('mongoose');
require('dotenv').config();

let mongoEndpoint = 'mongodb://0.0.0.0/0/project_app';
if (process.env.MONGODB_URI) {
    mongoEndpoint = process.env.MONGODB_URI;
}
// if (process.env.MONGO) {
//     mongoEndpoint = process.env.MONGO;
// }
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//backend url
app.use('/api/signup/', register);
app.use('/api/picture/', picture);

app.get('/', function(req, res) {
    res.send('this is a login page');
})

app.post('/', async function(req, res) {
    const body = req.body;
    const response = await signupModel.findUserByEmail(body.email);
    if (response.length !== 0) { // returned an array of an object with the unique email
        //if stored pw == body.password
        if (response[0].password == body.password) {
            res.send('login success');
        }
        // email exist but pw is wrong
        else {
            res.send('wrong password');
        }
    }
    else {
        res.send('need signup first');
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Starting server' + `${PORT}`);
  });