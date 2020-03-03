#!/usr/bin/node

/**
 * Class that generates the ending words of a new language
 */
class EndingCreator {
  constructor() {
    this.vocals = ['a', 'e', 'i', 'o', 'u']
    this.consonants = ['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'x', 'z']
    this.combinationsVC = ['ab', 'eb', 'ib', 'ob', 'ub', 'ac', 'ec', 'ic', 'oc', 'uc', 'ad', 'ed', 'id', 'od', 'ud', 'af', 'ef', 'if', 'of', 'uf', 'ag', 'eg', 'ig', 'og', 'ug', 'ah', 'eh', 'ih', 'oh', 'uh', 'aj', 'ej', 'ij', 'oj', 'uj', 'ak', 'ek', 'ik', 'ok', 'uk', 'al', 'el', 'il', 'ol', 'ul', 'am', 'em', 'im', 'om', 'um', 'an', 'en', 'in', 'on', 'un', 'ap', 'ep', 'ip', 'op', 'up', 'ar', 'er', 'ir', 'or', 'ur', 'as', 'es', 'is', 'os', 'us', 'at', 'et', 'it', 'ot', 'ut', 'av', 'ev', 'iv', 'ov', 'uv', 'az', 'ez', 'iz', 'oz', 'uz']
    this.combinationsVV = ['ea', 'ia', 'oa', 'ua', 'ae', 'ie', 'oe', 'ue', 'ai', 'ei', 'oi', 'ui', 'ao', 'eo', 'io', 'uo', 'au', 'eu', 'iu', 'ou']
    this.ends = {}
    this.vocalConsonant = ['endNoun', 'endAdjective', 'endPast', 'endPresent', 'endConditional', 'endFuture', 'endAdverb', 'endAccusative']
    this.vocal = ['endInfinitive', 'endImperative']
    this.vocalVocal = ['endPlural']
    this.vocalConsonantCreate()
    this.vocalVocalCreate()
    this.vocalCreate()
  }

  vocalConsonantCreate() {
    for (let i in this.vocalConsonant) {
      this.ends[this.vocalConsonant[i]] = this.combinationsVC.splice(Math.random() * this.combinationsVC.length, 1).toString()
    }
  }

  vocalVocalCreate() {
    for (let i in this.vocalVocal) {
      this.ends[this.vocalVocal[i]] = this.combinationsVV.splice(Math.random() * this.combinationsVV.length, 1).toString()
    }
  }

  vocalCreate() {
    for (let i in this.vocal) {
      this.ends[this.vocal[i]] = this.vocals.splice(Math.random() * this.vocals.length, 1).toString()
    }
  }
}

module.exports = EndingCreator
