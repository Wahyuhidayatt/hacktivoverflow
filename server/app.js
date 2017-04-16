const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//require file routes
let login_registers = require('./routes/login_registers');
let questions = require('./routes/questions');
let answers = require('./routes/answers');
let users = require('./routes/users');
let upAnswers = require('./routes/upAnswers');

app.use(cors());
app.use(logger('dev'));
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost/hacktivoverflow', (err) => {
  if(err) {
    console.log(err);
  }else {
    console.log('Database connect');
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000);

//rest API
app.use('/api', login_registers);
app.use('/api/questions', questions);
app.use('/api/answers', answers);
app.use('/api/users', users);
app.use('/api/upAnswers', upAnswers);

module.exports = app;
