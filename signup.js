const express = require('express')
const router = express.Router();
const signupModel = require('./user_model');

router.get('/', function(req, res) {
    res.send('this is a signup page');
})

router.post('/', async function(req, res) {
    const userData = req.body;
    // if email is registered already, don't add to db
    const response = await signupModel.findUserByEmail(userData.email);
    if (response.length !== 0) {
        res.send('existing user');
    }
    //else: register new user
    else {
        signupModel.createUser(userData)
        res.send('user created');
    }
})

module.exports = router;