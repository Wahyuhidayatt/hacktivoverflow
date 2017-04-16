const express = require('express');
const Question = require('../models/question');

let methods = {}
  methods.create = (req, res) => {
    let question = new Question ({
      idUser : req.body.idUser,
      title : req.body.title,
      description : req.body.description,
      answers : [],
      upvote : [],
      downvote : []
    })
    question.save((err, result) => {
      if(err) {
        res.json(err)
      }else {
        res.json(result)
      }
    })
  }
  methods.getAll = (req, res) => {
    Question.find()
      .populate('answers')
      .exec(function (err, dataQuestion) {
      if (err) {
        res.send(err)
      }else{
        res.send(dataQuestion)
      }
    });
  }

module.exports = methods;
