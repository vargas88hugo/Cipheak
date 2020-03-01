#!/usr/bin/node

class EndingCreator {
  constructor() {
    this.vocals = ['a', 'e', 'i', 'o', 'u']
    this.combinations_vc = ['ab', 'eb', 'ib', 'ob', 'ub', 'ac', 'ec', 'ic', 'oc', 'uc', 'ad', 'ed', 'id', 'od', 'ud', 'af', 'ef', 'if', 'of', 'uf', 'ag', 'eg', 'ig', 'og', 'ug', 'ah', 'eh', 'ih', 'oh', 'uh', 'aj', 'ej', 'ij', 'oj', 'uj', 'ak', 'ek', 'ik', 'ok', 'uk', 'al', 'el', 'il', 'ol', 'ul', 'am', 'em', 'im', 'om', 'um', 'an', 'en', 'in', 'on', 'un', 'ap', 'ep', 'ip', 'op', 'up', 'ar', 'er', 'ir', 'or', 'ur', 'as', 'es', 'is', 'os', 'us', 'at', 'et', 'it', 'ot', 'ut', 'av', 'ev', 'iv', 'ov', 'uv', 'az', 'ez', 'iz', 'oz', 'uz']
    this.combinations_vv = ['ea', 'ia', 'oa', 'ua', 'ae', 'ie', 'oe', 'ue', 'ai', 'ei', 'oi', 'ui', 'ao', 'eo', 'io', 'uo', 'au', 'eu', 'iu', 'ou']
    this.ends = {}
    this.vocal_consonant = ['noun', 'adjective', 'past', 'present', 'conditional', 'future', 'adverb', 'accusative']
    this.vocal = ['infinitive', 'imperative']
    this.vocal_vocal = ['plural']
    this.vocal_consonant_create()
    this.vocal_vocal_create()
    this.vocal_create()
  }

  vocal_consonant_create() {
    for (let i in this.vocal_consonant) {
      this.ends[this.vocal_consonant[i]] = this.combinations_vc.splice(Math.random() * this.combinations_vc.length, 1).toString()
    }
  }

  vocal_vocal_create() {
    for (let i in this.vocal_vocal) {
      this.ends[this.vocal_vocal[i]] = this.combinations_vv.splice(Math.random() * this.combinations_vv.length, 1).toString()
    }
  }

  vocal_create() {
    for (let i in this.vocal) {
      this.ends[this.vocal[i]] = this.vocals.splice(Math.random() * this.vocals.length, 1).toString()
    }
  }
}

module.exports = EndingCreator
