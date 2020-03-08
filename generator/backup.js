#!/usr/bin/node

/**
 * Class that generates the ending words of a new language
 */
class EndingCreator {
  constructor() {
    this.ends = {};
    this.combinations = new Combinator();
    this.combinationsVC = this.combinations.vowelConsonants;
    this.combinationsVV = this.combinations.vowelvowels;
    this.consonants = this.combinations.consonants;
    this.vowels = this.combinations.vowels;
    this.vowelConsonant = ['endNoun', 'endAdjective', 'endPast', 'endPresent', 'endConditional', 'endFuture', 'endAdverb', 'endAccusative'];
    this.vowel = ['endInfinitive', 'endImperative'];
    this.vowelVowel = ['endPlural'];
    this.vowelConsonantCreate();
    this.vowelVowelCreate();
    this.vowelCreate();
  }

  vowelConsonantCreate() {
    for (let i in this.vowelConsonant) {
      this.ends[this.vowelConsonant[i]] = this.combinationsVC.splice(Math.random() * this.combinationsVC.length, 1).toString();
    }
  }

  vowelVowelCreate() {
    for (let i in this.vowelVowel) {
      this.ends[this.vowelVowel[i]] = this.combinationsVV.splice(Math.random() * this.combinationsVV.length, 1).toString();
    }
  }

  vowelCreate() {
    for (let i in this.vowel) {
      this.ends[this.vowel[i]] = this.vowels.splice(Math.random() * this.vowels.length, 1).toString();
    }
  }
}

/**
 * Class that generates the affix combinations
 */
class Combinator {
  constructor() {
    this.vowels = this.vowelsCreator();
    this.especialvowels = this.especialVowelsCreator();
    this.consonants = this.consonantsCreator();
    this.vowelConsonants = this.vowelConsonantsCreator(this.vowels, this.consonants);
    this.vowelvowels = this.vowelvowelsCreator(this.vowels, this.especialvowels);
  }

  consonantsCreator() {
    let specials = {
      'c': ['ĉ', 'ç','ć', 'č', 'ċ', 'ƈ', 'c̈'],
      'g': ['ĝ', 'ğ', 'ɣ', 'ȝ', 'γ', 'г', 'ѓ', 'ǵ', 'ġ', 'ǧ', 'ģ', 'ḡ', 'ǥ', 'ɠ'],
      'h': ['ĥ', 'ħ', 'ḥ', 'ȟ', 'ḧ', 'ḣ', 'ḩ', 'ḫ', 'ẖ', 'ⱨ'],
      's': ['ś', 'ṥ', 'ŝ', 'š', 'ṧ', 'ṡ', 'ş', 'ṣ', 'ṩ', 'ș', 's̩']
    };

    for (let i in specials) {
      specials[i] = specials[i][Math.floor(Math.random() * specials[i].length)];
    }

    return ['b', 'c', specials.c, 'd', 'f', 'g', specials.g, 'h', specials.h, 'k', 'l', 'm', 'n', 'p', 'r', 's', specials.s, 't', 'v', 'z'];
  }

  vowelsCreator() {
    return ['a', 'e', 'i', 'o', 'u'];
  }

  vowelConsonantsCreator(vowels, consonants) {
    let combinations = [];
    
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        combinations = [...combinations, vowels[i] + consonants[j]];
      }
    }

    return combinations;
  }

  vowelvowelsCreator(vowels, especialvowels) {
    let combinations = [];

    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < especialvowels.length; j++) {
        combinations = [...combinations, vowels[i] + especialvowels[j]];
      }
    }

    return combinations;
  }

  especialVowelsCreator() {
    let specials = {
      'i': ['í', 'ì', 'ĭ', 'î', 'ǐ', 'ï', 'ḯ', 'ĩ', 'į', 'ī', 'ỉ', 'ȉ', 'ȋ', 'ị', 'ḭ', 'ɨ'],
      'u': ['ŭ', 'û', 'ǔ', 'ů', 'ü', 'ǘ', 'ǜ', 'ǚ', 'ǖ', 'ű', 'ũ', 'ṹ', 'ų', 'ū', 'ṻ', 'ủ', 'ȕ', 'ȗ', 'ư', 'ữ', 'ử', 'ự', 'ụ', 'ṳ', 'ṷ', 'ṵ', 'ʉ']
    };

    for (let i in specials) {
      specials[i] = specials[i][Math.floor(Math.random() * specials[i].length)];
    }

    return Object.values(specials);
  }
}

module.exports = EndingCreator;