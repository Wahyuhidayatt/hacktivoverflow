const express = require('express');
const Votes = require('../models/question');

let methods = {}
  methods.up = (req, res) => {
      Votes.findOneAndUpdate(req.params.id,
        { $push : {'upvoteAnswer': req.body } },
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
module.exports = methods;
