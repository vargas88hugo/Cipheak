#!/usr/bin/node


/**
 * Method that parse each word of the CSV list
 */
const parseWord = (data, i, j) => {
  const vocals = ['a', 'e', 'i', 'o', 'u'];
  const parsers = {
    "e": /[əæ]/g,
    "i": /[ıy]/g,
    "o": /[ðø]/g,
    "u": /[ŭ]/g,
    "d": /[đ]/g,
    "g": /[ĝ]/g,
    "l": /[ł]/g,
    "n": /[ħñ]/g,
    "": /[ ,'ʻ-]/g,
    "v": /[w]/g,
    "k": /[q]/g,
    "s": /[ŝ]/g,
    "ks": /x/g
  }
  const entries = Object.entries(parsers);
   
  data[i][j] = data[i][j].toLowerCase();
  data[i][j] = data[i][j].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  for (const [charac, regex] of entries) {
    data[i][j] = data[i][j].replace(regex, charac);
  }

  while (vocals.includes(data[i][j][data[i][j].length - 1])) {
    data[i][j] = data[i][j].substring(0, data[i][j].length - 1);
  }
}


module.exports = parseWord;
