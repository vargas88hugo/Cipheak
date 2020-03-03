#!/usr/bin/node
/**
 * This program parses the CSV file to an ordered array
 * with parsing
 */

const csv = require('csv');
const obj = csv();
const myData1 = [];

/**
 * Method that parse the CSV file to an array
 */
obj.from.path('/home/hugodev/Programming/Cypheak/words.csv').to.array((data) => {
  loopData(data);

  console.dir(myData1, {'maxArrayLength': null});
});

/**
 * Method that parse each word of the CSV list
 */
const parseRoot = (data, i, j) => {
  const vocals = ['a', 'e', 'i', 'o', 'u'];
  const parsers = {
    "e": /[əæ]/g,
    "i": /[ı]/g,
    "o": /[ðø]/g,
    "u": /[ŭ]/g,
    "n": /[ħñ]/g,
    "": /[ ,'ʻ-]/g,
    "v": /[w]/g,
    "k": /[q]/g
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

/**
 * Method that iterates the CSV data
 */
let loopData = (data) => {
  let count = 1;

  for (let i = 1; i <= 60; i++) {
    const myData2 = [];
    myData1.push(count++);

    myData2.push(data[i][0]);
    for (let j = 0; j <= 82; j++) {
      if (data[i][j] !== undefined && data[i][j] !== "" && data[i][j].length > 2 && data[i][j].length <= 10) {
	parseRoot(data, i, j);
	if (data[i][j].length < 2) {
	  continue;
	}
	myData2.push(data[i][j]);
      }
    }
    myData1.push(myData2);
  }
}
