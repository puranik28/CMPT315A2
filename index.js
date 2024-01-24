/**
 * Tests all the functions
 */

const findNaNIndex = require('./findNaNIndex');
const results1 = findNaNIndex([2, NaN, 8, 16, 32]); // => [1]
const results2 = findNaNIndex([2, 4, NaN, 16, 32, NaN]); // => [2, 5]
const results3 = findNaNIndex([2, 4, 16, 32]); // => []
console.log(results1);
console.log(results2);
console.log(results3);


const isArrayFactorChain = require('./isArrayFactorChain');
const results4 = isArrayFactorChain([2, 4, 8, 16, 32]); // => true
const results5 = isArrayFactorChain([2, 4, 8, 16, 32, 68]); // => false
console.log(results4);
console.log(results5);

const countNumberOfArrays = require('./countNumberOfArrays');
const results6 = countNumberOfArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]); // => 2
const results7 = countNumberOfArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]); // => 3
console.log(results6);
console.log(results7);

const matches = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
];

const participants = require('./participants');
const results8 = participants(matches); // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
console.log(results8);

const winnersObject = require('./winnersObject');
const results9 = winnersObject(matches);
console.log(results9);

const biggestLoser = require('./biggestLoser');
const results10 = biggestLoser(matches); // => 'Bob'
console.log(results10);
