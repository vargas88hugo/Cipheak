const passport = require('passport')
const LanguageCreator = require('../languageGenerator/languageCreator');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email'],
      display: 'popup'
    })
  );
  
  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/auth/google/callback'}), (req, res) => {
      const lang = new LanguageCreator();
      let name = require('./auth.controller');

      res.render('test', {
        userName: name,
        creationDate: new Date(),
        
        rootBona: lang.roots['bona'],
        rootCielo: lang.roots['ĉielo'],
        rootEsti: lang.roots['esti'],
        rootFarto: lang.roots['farto'],
        rootMeza: lang.roots['meza'],
        rootNokto: lang.roots['nokto'],
        rootTago: lang.roots['tago'],
        rootSaluton: lang.roots['saluton'],
        rootSaxti: lang.roots['ŝati'],
        rootStelo: lang.roots['stelo'],
    
        endAccusative: lang.terminations['endAccusative'],
        endAdjective: lang.terminations['endAdjective'],
        endAdverb: lang.terminations['endAdverb'],
        endNoun: lang.terminations['endNoun'],
        endPlural: lang.terminations['endPlural'],
        endPresent: lang.terminations['endPresent'],
        endInfinitive: lang.terminations['endInfinitive'],
    
        articleLa: lang.specialAdverbs['la'],
        
        prepositionEn: lang.prepositions['en'],
        prepositionPost: lang.prepositions['post'],
    
        pronounI: lang.pronouns['i'],
        pronounYou: lang.pronouns['you'],
    
        questionCorrelative: lang.questionCorrelative,
    
        modeCorrelative: lang.correlatives['modeCorrelative'],
    
        conjunctionKaj: lang.conjunctions['kaj']
      });
    });

  app.get('/popup', (req, res, next) => {
    res.render('auth-popup-callback', {layout: false});
  });

  app.get('/popup-done', (req, res, next) => {
    var url = (req.user && req.session.firstLogin) ? '/' : '/';
    res.redirect(url);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};