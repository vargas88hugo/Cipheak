const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

let name = "";

/**
 * This callback function seraliazes the id user to passport 
 * and then store it
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * This callback function deseliazes the id user to passport 
 * and then find user in database
 */
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

/**
 * The main function of passport. It uses a google strategy and
 * compares with the database. Return false if credentials are false
 */
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  name = profile.name.givenName + " " + profile.name.familyName;
  module.exports = name;
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({
          googleId: profile.id
        })
          .save()
          .then(user => done(null, user));
      }
    });  
  })
);
