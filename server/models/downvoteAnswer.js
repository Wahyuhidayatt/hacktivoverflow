'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let schemaDownvoteAnswer = new Schema({
  voter : { type : Schema.Types.ObjectId, ref: 'User'}
},{
  timestamps : true
});

module.exports = schemaDownvoteAnswer;
