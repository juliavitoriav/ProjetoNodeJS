<<<<<<< HEAD
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const urlMongo = "mongodb+srv://julia_vitoriav:12345678910@cluster0.um9on5j.mongodb.net/projeto_node?retryWrites=true&w=majority";

console.log(urlMongo);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cardapioRouter = require('./routes/cardapio');
const { db } = require('./models/cardapio');

var app = express();

mongoose.connect(urlMongo);

const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console, "Erro na conexão ao MongoDB."));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cardapio', cardapioRouter);
app.use('/sobre', (req, res) => {
  res.render("layoutsobre")
})

app.use('/cardapio/create', (req, res) => {
  res.render("create")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
=======
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const urlMongo = "mongodb+srv://julia_vitoriav:12345678910@cluster0.um9on5j.mongodb.net/projeto_node?retryWrites=true&w=majority";

console.log(urlMongo);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cardapioRouter = require('./routes/cardapio');
const { db } = require('./models/cardapio');

var app = express();

mongoose.connect(urlMongo);

const dbConnection = mongoose.connection;
dbConnection.on("error", console.error.bind(console, "Erro na conexão ao MongoDB."));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cardapio', cardapioRouter);
app.use('/sobre', (req, res) => {
  res.render("layoutsobre")
})

app.use('/cardapio/create', (req, res) => {
  res.render("create")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
>>>>>>> ea53228df1cc25b1cfa3c9baa20cab72a6e50471
