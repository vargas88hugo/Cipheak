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
const languageCreator = require('./languageGenerator/languageCreator');
const LanguageCreator = require('./languageGenerator/languageCreator');
require('./authGoogle/auth.model');
require('./authGoogle/auth.controller');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

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
app.use(express.static(path.join(__dirname, 'public')))

authRoutes(app);

app.get('/', (req, res) => {
  const lang = new LanguageCreator();

  res.render('test', {
    userName: 'Hugo',
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

app.get('/about', (req, res) => {
  res.render('about')
});

app.post('/action', (req, res) => {
  res.redirect('/auth/google');
});

app.listen(properties.PORT, () => {
  console.log(`Server running on port ${properties.PORT}`);
});