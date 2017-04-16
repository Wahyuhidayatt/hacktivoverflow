'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const upvote = require('./upvoteAnswer');
const downvote = require('./downvoteAnswer');

let schemaAnswer = new Schema({
  author : { type : Schema.Types.ObjectId, ref: 'User'},
  content: String,
  upvoteAnswer : [upvote],
  downvoteAnswer : [downvote]
},{
  timestamps : true
});

let Answer = Mongoose.model('Answer', schemaAnswer);

module.exports = Answer;
