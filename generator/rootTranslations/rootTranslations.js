#!/usr/bin/node
/**
 * This program parses the CSV file to an ordered array
 * with parsing
 */

const csv = require('csv');
const obj = csv();
const myData1 = [];
const parseWord = require('./parseWord');

/**
 * This a method that parses the csv file to an array with esperanto words
 * as the first element of each subarray
 */
const rootTranslation = () => {
  let words = obj.from.path('./words.csv').to.array((data) => {
    let parseData = loopData(data);
  });

  return myData1;
}

/**
 * Method that iterates the CSV data for creating a new array with 
 * the parsed data
 */
const loopData = (data) => {
  let count = 1;

  for (let i = 1; data[i] !== undefined && data[i].length !== 0; i++) {
    const myData2 = [];
    myData1.push(count++);

    myData2.push(data[i][0]);
    for (let j = 0; data[i][j] !== undefined && data[i][j] !== ''; j++) {
      if (data[i][j] !== undefined && data[i][j] !== "" && data[i][j].length > 2 && data[i][j].length <= 10) {
	      parseWord(data, i, j);
	      if (data[i][j].length < 2) {
	        continue;
	      }
	      myData2.push(data[i][j]);
      }
    }
    myData1.push(myData2);
  }
  return myData1;
}

module.exports = rootTranslation;
