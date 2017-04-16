const express = require('express');
const User = require('../models/user');
const passwordHash = require('password-hash');

let methods = {}

  methods.create = (req, res, next) => {
    let user = new User({
      email : req.body.email,
      username : req.body.username,
      password : passwordHash.generate(req.body.password)
    });
    user.save((err, result) => {
      if(err) {
        res.json(err);
      } else {
        res.json(result)
      }
    })
  }

module.exports = methods;
