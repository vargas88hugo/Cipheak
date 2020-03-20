const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const properties = require('./config/properties');
const authRoutes = require('./authGoogle/auth.routes');
const keys = require('./config/keys');
require('./authGoogle/auth.model');
require('./authGoogle/auth.controller');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.listen(properties.PORT, () => {
  console.log(`Server running on port ${properties.PORT}`);
});