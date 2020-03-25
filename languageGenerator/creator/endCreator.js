/**
 * Class that generates the ending words of nouns, plurals, adjectives and verbs 
 */
class EndingCreator {
  ends = {};
  vowelConsonant = ['endNoun', 'endAdjective', 'endPast', 'endPresent', 'endConditional', 'endFuture', 'endAdverb', 'endAccusative'];
  vowel = ['endInfinitive', 'endImperative'];
  vowelVowel = ['endPlural', 'suffixeAu'];

  constructor(combinator) {
    this.combinations = combinator;
    this.setVowelConsonant();
    this.setVowelVowel();
    this.setVowel();
  }

  setVowelConsonant() {
    for (let i in this.vowelConsonant) {
      this.ends[this.vowelConsonant[i]] = this.combinations.vowelConsonants.splice(Math.random() * this.combinations.vowelConsonants.length, 1).toString();
    }
  }

  setVowelVowel() {
    for (let i in this.vowelVowel) {
      this.ends[this.vowelVowel[i]] = this.combinations.vowelVowels.splice(Math.random() * this.combinations.vowelVowels.length, 1).toString();
    }
  }

  setVowel() {
    for (let i in this.vowel) {
      this.ends[this.vowel[i]] = this.combinations.vowels.splice(Math.random() * this.combinations.vowels.length, 1).toString();
    }
  }
}

module.exports = EndingCreator;