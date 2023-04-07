const Schema = require('mongoose').Schema;

exports.UserSchema = new Schema({
  firstName : {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {collection: 'signups'});