/**
 * Class that generates continuous times
 */
class ContinuouTCreator {
  continuouKeys = ['continuousPast', 'continuousPresent', 'continuousFuture'];
  continuous = {};

  constructor(combinations) {
    this.setContinuous(combinations);
    delete this.continuouKeys;
  }

  setContinuous(combinations) {
    for (let i in this.continuouKeys) {
        this.continuous[this.continuouKeys[i]] = combinations.consonantVowelConsonants.splice(Math.random() * combinations.consonantVowelConsonants.length, 1).toString();
    }
  }
}

module.exports = ContinuouTCreator;