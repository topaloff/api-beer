var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var typesRouter = require('./routes/types');
var ingredientsRouter = require('./routes/ingredients');
var breweriesRouter = require('./routes/breweries');
var countriesRouter = require('./routes/countries');
var beersRouter = require('./routes/beers');
var compositionsRouter = require('./routes/compositions');
var commentsRouter = require('./routes/comments');
var notesRouter = require('./routes/notes');

var app = express();
require('dotenv').config({path: __dirname + '/.env'});
require('dotenv').config({path: __dirname + '/.env'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/types', typesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/breweries', breweriesRouter);
app.use('/countries', countriesRouter);
app.use('/beers', beersRouter);
app.use('/comments', commentsRouter);
app.use('/compositions', compositionsRouter);
app.use('/notes', notesRouter);


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
