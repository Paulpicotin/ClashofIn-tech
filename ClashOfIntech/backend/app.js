var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var COI = require('./utils/COI.js');
const session = require('express-session');
const config = require('./server.config.js');
const cors = require('cors')


// on initalise la connexion à la base de données
COI.init();

var indexRouter = require('./routes/index');

var app = express();

app.use(cors({
  credentials:true,
  origin:"http://localhost:8080"
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: config.SESSION_SECRET }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);

module.exports = app;