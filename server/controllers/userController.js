const express = require('express');
const User = require('../models/user');

let methods = {}
 methods.getAll = (req, res) => {
   User.find(function(err, dataUser) {
     if(err) {
       res.send(err);
     }else {
       res.send(dataUser);
     }
   })
 }

module.exports = methods
