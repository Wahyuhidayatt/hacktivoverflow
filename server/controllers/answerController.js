const express = require('express');
const Answer = require('../models/Answer');
const Question = require('../models/question')

let methods = {}
  methods.create = (req, res) => {
    let answer = new Answer ({
      author : req.body.author,
      content : req.body.content,
      upvote : [],
      downvote : []
    })
    answer.save(function (err, data) {
      if(err){
        res.send(err)
      }else {
        Question.findByIdAndUpdate(req.params.id,
          { $push : {'answers': data } },
            {safe: true, upsert: true, new: true},
            function(err, data) {
              if(err) {
                res.send(err)
              }else {
                res.send(data)
              }
            }
          );
        }
      })
    }
module.exports = methods;
