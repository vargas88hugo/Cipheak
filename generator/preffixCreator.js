/**
 * Class that generates preffixes
 */
class PreffixCreator {
  preffixKeys = ['preffixeRelationInLaw', 'preffixeScattering', 'preffixeMomentaryAction', 'preffixeEx', 'preffixeNasty', 'preffixeBothSexes', 'preffixeOpposite', 'preffixeIncorrectly', 'preffixeGrandTime', 'preffixeOverAgain'];
  preffixes = {};

  constructor(combinations) {
    this.setPreffixes(combinations);
    delete this.preffixKeys;
  }

  setPreffixes(combinations) {
    for (let i in this.preffixKeys) {
      let num = Math.round(Math.random());
      if (num === 0) {
        this.preffixes[this.preffixKeys[i]] = combinations.vowelConsonants.splice(Math.random() * combinations.vowelConsonants.length, 1).toString();
      } else {
        this.preffixes[this.preffixKeys[i]] = combinations.consonantVowelConsonants.splice(Math.random() * combinations.consonantVowelConsonants.length, 1).toString();
      }
    }
  }
}

module.exports = PreffixCreator;