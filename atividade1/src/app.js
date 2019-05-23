const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

const rIndex = require('./routes/rIndex');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars({defaultLayout: 'index'}))
app.set('views', __dirname + '\\views');
app.set('view engine', 'handlebars');

// Rotas
app.use('/', rIndex);

module.exports = app;