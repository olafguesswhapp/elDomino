var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var credentials = require('./credentials.js');
var mongoose = require('mongoose');

var app = express();

// MongoDB Intantiation
var opts = {
    server: {
        socketOptions: {keepAlive: 1}
    }
};
// do not forget to open a 2nd terminal window and start mongoDB with "mongod" upfront
switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, opts);
        console.log('Using MongoDB development mode');
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, opts);
        console.log('Using MongoDB production mode');
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
}

// set up handlebars view engine
var handlebars = require('express-handlebars')
  .create({
    defaultLayout:'main',
    helpers: {
    }
});
// view engine setup
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/routes.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
