const mongoose = require('mongoose');

const UserSchema = require('./user_schema').UserSchema;

const signupModel = mongoose.model('signupModel', UserSchema);

function createUser(user) {
    return signupModel.create(user);
}

function findUserByEmail(email) {
    return signupModel.find({email: email}).exec();
}

module.exports = {
    createUser,
    findUserByEmail
}