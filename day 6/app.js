var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var morgan = require('morgan');
var fs = require("fs");
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gradesRouter = require('./routes/grades');

var fs = require("fs");

var app = express();

const accessLog = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(bodyParser.json());


app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('combined', { stream: accessLog }))

/*
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
read the response data  access to all form data inside body (accumulate parse) requwst.body.password 
something like that 
*/
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use(express.static(path.join(__dirname, 'public')));
Express.static. - >.  read resources and streaming back like some resources from folder 

Like static url 

*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradesRouter);

app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('x-powered-by',false);

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
app.listen(3000, function () {
});

module.exports = app;

