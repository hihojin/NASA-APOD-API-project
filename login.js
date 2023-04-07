const express = require('express')
const router = express.Router();
const signupModel = require('./user_model');

router.get('/', function(req, res) {
    res.send('this is a login page');
})

router.post('/', async function(req, res) {
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

module.exports = router;