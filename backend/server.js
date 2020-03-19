const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');

const properties = require('./config/properties');
const authRoutes = require('./google/auth.routes');
const keys = require('./config/keys');
require('./google/auth.model');
require('./google/auth.controller');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(properties.PORT, () => {
  console.log(`Server running on port ${properties.PORT}`);
});