/**
 * Class that generates correlatives
 */
class CorrelativeCreator {
  vowelConsonant = ['modeCorrelative', 'IndividualCorrelative', 'possessionCorrelative', 'quantityCorrelative', 'reasonCorrelative', 'timeCorrelative'];
  correlatives = {};

  constructor(combinations) {
    this.setCorrelative(combinations);
    delete this.vowelConsonant;
  }

  setCorrelative(combinations) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i in this.vowelConsonant) {
      this.correlatives[this.vowelConsonant[i]] = combinations.vowelConsonants.splice(Math.random() * combinations.vowelConsonants.length, 1).toString();
    }

    this.correlatives['demonstrativeCorrelative'] = combinations.consonants.splice(Math.random() * combinations.consonants.length, 1).toString();

    this.correlatives['questionCorrelative'] = combinations.consonants.splice(Math.random() * combinations.consonants.length, 1).toString();

    this.correlatives['universalCorrelative'] = combinations.specialConsonants.splice(Math.random() * combinations.specialConsonants.length, 1).toString();
    
    this.correlatives['negativeCorrelative'] = combinations.consonants.splice(Math.random() * combinations.consonants.length, 1).toString() + vowels.splice(Math.random() * vowels.length, 1).toString() + combinations.consonants.splice(Math.random() * combinations.consonants.length, 1).toString();
  }
}

module.exports = CorrelativeCreator;