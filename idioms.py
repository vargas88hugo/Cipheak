#!/usr/bin/python3
from abc import ABC, abstractmethod
from random import choice, randrange


class EndCreator():
    vocal_consonant = ['noun', 'adjective', 'past', 'present', 'conditional', 'future', 'adverb', 'accusative']
    vocal = ['infinitive', 'imperative']
    vocal_vocal = ['plural']
    ends = {}

    def __init__(self):
        self.vocals = ['a', 'e', 'i', 'o', 'u']
        self.combinations_vc = ['ab', 'eb', 'ib', 'ob', 'ub', 'ac', 'ec', 'ic', 'oc', 'uc', 'ad', 'ed', 'id', 'od', 'ud', 'af', 'ef', 'if', 'of', 'uf', 'ag', 'eg', 'ig', 'og', 'ug', 'ah', 'eh', 'ih', 'oh', 'uh', 'aj', 'ej', 'ij', 'oj', 'uj', 'ak', 'ek', 'ik', 'ok', 'uk', 'al', 'el', 'il', 'ol', 'ul', 'am', 'em', 'im', 'om', 'um', 'an', 'en', 'in', 'on', 'un', 'ap', 'ep', 'ip', 'op', 'up', 'ar', 'er', 'ir', 'or', 'ur', 'as', 'es', 'is', 'os', 'us', 'at', 'et', 'it', 'ot', 'ut', 'av', 'ev', 'iv', 'ov', 'uv', 'az', 'ez', 'iz', 'oz', 'uz']
        self.combinations_vv = ['ea', 'ia', 'oa', 'ua', 'ae', 'ie', 'oe', 'ue', 'ai', 'ei', 'oi', 'ui', 'ao', 'eo', 'io', 'uo', 'au', 'eu', 'iu', 'ou']
        
        self.vocal_consonant_create()
        self.vocal_vocal_create()
        self.vocal_create()
        

    def vocal_consonant_create(self):
        for i in self.vocal_consonant:
            self.ends[i] = self.combinations_vc.pop(randrange(len(self.combinations_vc)))

    def vocal_vocal_create(self):
        for i in self.vocal_vocal:
            self.ends[i] = self.combinations_vv.pop(randrange(len(self.combinations_vv)))

    def vocal_create(self):
        for i in self.vocal:
            self.ends[i] = self.vocals.pop(randrange(len(self.vocals)))
