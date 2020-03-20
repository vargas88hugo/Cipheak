const passport = require('passport')

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email'],
      display: 'popup'
    })
  );
  
  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/auth/google/callback'}), (req, res) => {
      res.redirect('/after-auth.html')
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