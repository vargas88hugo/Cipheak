/**
 * Class that generates perfect times
 */
class PerfectTCreator {
  perfectKeys = ['perfectIt', 'perfectAt', 'perfectOt'];
  perfects = {};

  constructor(combinations) {
    this.setPerfects(combinations);
    delete this.perfectKeys;
  }

  setPerfects(combinations) {
    for (let i in this.perfectKeys) {
        this.perfects[this.perfectKeys[i]] = combinations.vowelConsonants.splice(Math.random() * combinations.vowelConsonants.length, 1).toString();
    }
  }
}

module.exports = PerfectTCreator;