/**
 * Class that generates the abecedary and its combinations
 */
class Combinator {
  specialConsonants = []
  
  constructor() {
    this.vowels = this.setVowels();
    this.specialvowels = this.setEspecialVowels();
    this.consonants = this.setConsonants();
    this.vowelConsonants = this.setVowelConsonants(this.vowels, this.consonants);
    this.vowelVowels = this.setVowelVowels(this.vowels, this.specialvowels);
    this.consonantVowels = this.setConsonantVowels(this.vowels, this.consonants);
    this.consonantVowelVowels = this.setConsonantVowelVowels(this.vowels, this.consonants);
  }
  
  setConsonants() {
    let specials = {
      'c': ['ĉ', 'ç','ć', 'č', 'ċ', 'ƈ', 'c̈'],
      'g': ['ĝ', 'ğ', 'ɣ', 'ȝ', 'γ', 'г', 'ѓ', 'ǵ', 'ġ', 'ǧ', 'ģ', 'ḡ', 'ǥ', 'ɠ'],
      'h': ['ĥ', 'ħ', 'ḥ', 'ȟ', 'ḧ', 'ḣ', 'ḩ', 'ḫ', 'ẖ', 'ⱨ'],
      's': ['ś', 'ṥ', 'ŝ', 'š', 'ṧ', 'ṡ', 'ş', 'ṣ', 'ṩ', 'ș', 's̩']
    };
    
    for (let i in specials) {
      specials[i] = specials[i][Math.floor(Math.random() * specials[i].length)];
    }

    this.specialConsonants = Object.values(specials);
    
    return ['b', 'c', specials.c, 'd', 'f', 'g', specials.g, 'h', specials.h, 'k', 'l', 'm', 'n', 'p', 'r', 's', specials.s, 't', 'v', 'z'];
  }
    
  setVowels() {
    return ['a', 'e', 'i', 'o', 'u'];
  }
  
  setVowelConsonants(vowels, consonants) {
    let combinations = [];
      
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        combinations = [...combinations, vowels[i] + consonants[j]];
      }
    }
  
    return combinations;
  }
  
  setVowelVowels(vowels, specialvowels) {
    let combinations = [];
  
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < specialvowels.length; j++) {
        if (!(j === 0 && vowels[i] === 'i') && !(j === 1 && vowels[i] === 'u'))
        combinations = [...combinations, vowels[i] + specialvowels[j]];
      }
    }
  
    return combinations;
  }

  setConsonantVowels(vowels, consonants) {
    let combinations = [];
      
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        combinations = [...combinations, consonants[j] + vowels[i]];
      }
    }
  
    return combinations;
  }

  setConsonantVowelVowels(vowels, consonants) {
    let combinations = [];
      
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        for (let k = 0; k < vowels.length; k++) {
          if (vowels[i] != vowels[k]) {
            combinations = [...combinations, consonants[j] + vowels[k] + vowels[i]];
          }
        }
      }
    }
  
    return combinations;
  }
  
  setEspecialVowels() {
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

module.exports = Combinator;
  