/**
 * Class that generates suffixes
 */
class SuffixCreator {
  suffixKeys = ['suffixePoor', 'suffixeContinual', 'suffixeConcrete', 'suffixeMember', 'suffixeCollection', 'suffixeMasculineAffectionate', 'suffixePossible', 'suffixeAbstract', 'suffixeAugmentative', 'suffixePlace', 'suffixePropensity', 'suffixeMandatory', 'suffixePart', 'suffixeLeader', 'suffixeDiminutive', 'suffoxeOffspring', 'suffixeProfessional', 'suffixeCause', 'suffixeBecome', 'suffixeInstrument', 'suffixeFemale', 'suffixeWorthy', 'suffixeDoctrine', 'femineAffectionate', 'suffixeMultiplication', 'suffixeFraction', 'suffixeCollectiveGroup', 'suffixeContainer', 'suffixeOneCharacterizedBy', 'suffixeAdHoc', 'sufixxeAu'];
  suffixes = {};

  constructor(combinations) {
    this.setSuffixes(combinations);
    delete this.suffixKeys;
  }

  setSuffixes(combinations) {
    for (let i in this.suffixKeys) {
      let num = Math.round(Math.random());
      if (num === 0 && combinations.vowelConsonants.length > 0) {
        this.suffixes[this.suffixKeys[i]] = combinations.vowelConsonants.splice(Math.random() * combinations.vowelConsonants.length, 1).toString();
      } else {
        this.suffixes[this.suffixKeys[i]] = combinations.consonantVowelConsonants.splice(Math.random() * combinations.consonantVowelConsonants.length, 1).toString();
      }
    }
  }
}

module.exports = SuffixCreator;