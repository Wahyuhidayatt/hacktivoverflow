'use strict'
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let schemaQuestion = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: "User"},
  title : String,
  description : String,
  answers : [{type : Schema.Types.ObjectId, ref: "Answer"}],
  upvote : [{
    type : Schema.Types.ObjectId,
    ref : "User"
  }],
  downvote : [{
    type : Schema.Types.ObjectId,
    ref : "User"
  }],
},{
  timestamps : true
})

let Question = Mongoose.model('Question', schemaQuestion);

module.exports = Question;
