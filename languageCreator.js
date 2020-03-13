const VocalConsonantCreator = require('./generator/vocalConsonantCreator');
const rootTranslations = require('./generator/rootTranslations/rootTranslations')();
const EndingCreator = require('./generator/endCreator');
const PronounCreator = require('./generator/pronounCreator');
const CorrelativeCreator = require('./generator/correlativeCreator');
const conjunctionTranslations = require('./generator/rootTranslations/conjunctionTranslations')();
const numberTranslations = require('./generator/rootTranslations/numberTranslations')();
const prepositionTranslations = require('./generator/rootTranslations/prepositionTranslations')();
const specialAdverbTranslations = require('./generator/rootTranslations/specialAdverbTranslations')();
const SuffixCreator = require('./generator/suffixCreator');
const PreffixCreator = require('./generator/preffixCreator');
const PerfectTCreator = require('./generator/perfectTCreator');
const ContinuouTCreator = require('./generator/continuouTCreator');

class LanguageCreator {
  constructor() {
    this.setAlphabet();
    this.setPronouns();
    this.setRoots();
    this.setPronouns();
    this.setTerminations();
    this.setYNQuestion();
    this.setCorrelatives();
    this.setConjunctions();
    this.setNumbers();
    this.setPrepositions();
    this.setSpecialAdverbs();
    this.setAffixes();
    this.setTimes();
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
      'specialConsonants': [...this.combinations.specialConsonants]
    }
  }

  setRoots() {
    this.roots = {};
  
    for (let i = 1; i < rootTranslations.length; i++) {
      if (rootTranslations[i][0] !== undefined && rootTranslations[i][0] !== '') {
        this.roots[rootTranslations[i][0]] = rootTranslations[i][Math.floor(Math.random() * (rootTranslations[i].length - 1)) + 1].replace(/ch/g, this.alphabet.specialConsonants[0]).replace(/sh/g, this.alphabet.specialConsonants[3]).replace(/j/g, this.alphabet.specialVowels[0]);
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

  setConjunctions() {
    this.conjunctions = {};
  
    for (let i = 1; i < conjunctionTranslations.length; i++) {
      if (conjunctionTranslations[i][0] !== undefined && conjunctionTranslations[i][0] !== '') {
        this.conjunctions[conjunctionTranslations[i][0]] = conjunctionTranslations[i][Math.floor(Math.random() * (conjunctionTranslations[i].length - 1)) + 1].replace(/ch/g, this.alphabet.specialConsonants[0]).replace(/sh/g, this.alphabet.specialConsonants[3]).replace(/j/g, this.alphabet.specialVowels[0]);
      }
    }
  }

  setNumbers() {
    this.numbers = {};
  
    for (let i = 1; i < numberTranslations.length; i++) {
      if (numberTranslations[i][0] !== undefined && numberTranslations[i][0] !== '') {
        this.numbers[numberTranslations[i][0]] = numberTranslations[i][Math.floor(Math.random() * (numberTranslations[i].length - 1)) + 1].replace(/ch/g, this.alphabet.specialConsonants[0]).replace(/sh/g, this.alphabet.specialConsonants[3]).replace(/j/g, this.alphabet.specialVowels[0]);
      }
    }
  }

  setPrepositions() {
    this.prepositions = {};
  
    for (let i = 1; i < prepositionTranslations.length; i++) {
      if (prepositionTranslations[i][0] !== undefined && prepositionTranslations[i][0] !== '') {
        this.prepositions[prepositionTranslations[i][0]] = prepositionTranslations[i][Math.floor(Math.random() * (prepositionTranslations[i].length - 1)) + 1].replace(/ch/g, this.alphabet.specialConsonants[0]).replace(/sh/g, this.alphabet.specialConsonants[3]).replace(/j/g, this.alphabet.specialVowels[0]);
      }
    }
  }

  setSpecialAdverbs() {
    this.specialAdverbs = {};
  
    for (let i = 1; i < specialAdverbTranslations.length; i++) {
      if (specialAdverbTranslations[i][0] !== undefined && specialAdverbTranslations[i][0] !== '') {
        this.specialAdverbs[specialAdverbTranslations[i][0]] = specialAdverbTranslations[i][Math.floor(Math.random() * (specialAdverbTranslations[i].length - 1)) + 1].replace(/ch/g, this.alphabet.specialConsonants[0]).replace(/sh/g, this.alphabet.specialConsonants[3]).replace(/j/g, this.alphabet.specialVowels[0]);
      }
    }
  }

  setAffixes() {
    this.preffixes = new PreffixCreator(this.combinations).preffixes;
    this.suffixes = new SuffixCreator(this.combinations).suffixes;
  }

  setTimes() {
    this.perfectTimes = new PerfectTCreator(this.combinations).perfects;
    this.continuouTimes = new ContinuouTCreator(this.combinations).continuous; 
  }
}

module.exports = LanguageCreator;