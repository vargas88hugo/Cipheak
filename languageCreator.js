const VocalConsonantCreator = require('./generator/vocalConsonantCreator');
const rootTranslations = require('./generator/rootTranslations/rootTranslations')();
const EndingCreator = require('./generator/endCreator');
const PronounCreator = require('./generator/pronounCreator');
const CorrelativeCreator = require('./generator/correlativeCreator');

class LanguageCreator {
  constructor() {
    this.setAlphabet();
    this.setPronouns();
    this.setRoots();
    this.setPronouns();
    this.setTerminations();
    this.setYNQuestion();
    this.setCorrelatives();
    delete this.combinations;
  }
  
  setPronouns() {
    this.pronouns = new PronounCreator(this.combinations);
    this.pronouns = {...this.pronouns.pronouns};
  }

  setAlphabet() {
    this.combinations = new VocalConsonantCreator();
    this.combinations = {...this.combinations};
    this.alphabet = {
      'vowels': [...this.combinations.vowels],
      'consonants': [...this.combinations.consonants],
      'specialVowels': [...this.combinations.specialvowels],
      'speciaConsonants': [...this.combinations.specialConsonants]
    }
  }

  setRoots() {
    this.roots = {};
  
    for (let i = 1; i < rootTranslations.length; i++) {
      if (rootTranslations[i][0] !== undefined && rootTranslations[i][0] !== '') {
        this.roots[rootTranslations[i][0]] = rootTranslations[i][Math.floor(Math.random() * (rootTranslations[i].length - 1)) + 1];
      }
    }
  }

  setTerminations() {
    this.terminations = new EndingCreator(this.combinations).ends;
  }

  setYNQuestion() {
    this.ynQuestion = this.combinations.vowelConsonants.splice(Math.random() * this.combinations.vowelConsonants.length, 1).toString();
  }

  setCorrelatives() {
    this.correlatives = new CorrelativeCreator(this.combinations).correlatives;
  }
}

module.exports = LanguageCreator;