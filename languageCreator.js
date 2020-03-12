const vocalConsonantCreator = require('./generator/vocalConsonantCreator');
const rootTranslations = require('./generator/rootTranslations/rootTranslations');
const endingCreator = require('./generator/endCreator');
const pronounCreator = require('./generator/pronounCreator');
const correlativeCreator = require('./generator/correlativeCreator');
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
    this.pronouns = new pronounCreator(this.combinations);
    this.pronouns = {...this.pronouns.pronouns};
  }

  setAlphabet() {
    this.combinations = new vocalConsonantCreator();
    this.combinations = {...this.combinations};
    this.alphabet = {
      'vowels': [...this.combinations.vowels],
      'consonants': [...this.combinations.consonants],
      'specialVowels': [...this.combinations.specialvowels],
      'speciaConsonants': [...this.combinations.specialConsonants]
    }
  }

  setRoots() {
    this.roots = rootTranslations();
  }

  setTerminations() {
    this.terminations = new endingCreator(this.combinations).ends;
  }

  setYNQuestion() {
    this.ynQuestion = this.combinations.vowelConsonants.splice(Math.random() * this.combinations.vowelConsonants.length, 1).toString();
  }

  setCorrelatives() {
    this.correlatives = new CorrelativeCreator(this.combinations).correlatives;
  }
}

module.exports = LanguageCreator;