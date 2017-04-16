'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
let schemaUser = new Schema({
  email : String,
  username: String,
  password: String
},{
  timestamps : true
});
let User = Mongoose.model('User', schemaUser);

module.exports = User;
