const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
// const initialize = require('./services/passport-config');
// Authentication & Login & Sessions config

// initialize(passport);

var path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// Define Routes
app.post('/api/info', (req, res) => res.send('test'));
app.use('/api/register', require('./routes/auth'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/create', require('./routes/create'));

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});