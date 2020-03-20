/**
 * Class that generates pronouns
 */
class PronounCreator {
  englishPronouns = ['i', 'you', 'he', 'she', 'we', 'it', 'they'];
  pronouns = {};

  constructor(combinations) {
    this.setPronoun(combinations);
    delete this.englishPronouns;
  }

  setPronoun(combinations) {
    for (let i in this.englishPronouns) {
      let num = Math.round(Math.random());
      if (num === 0) {
        this.pronouns[this.englishPronouns[i]] = combinations.consonantVowels.splice(Math.random() * combinations.consonantVowels.length, 1).toString();
      } else {
        this.pronouns[this.englishPronouns[i]] = combinations.consonantVowelVowels.splice(Math.random() * combinations.consonantVowelVowels.length, 1).toString();
      }
    }
  }
}

module.exports = PronounCreator;