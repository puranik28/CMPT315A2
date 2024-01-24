/**
 * Function to find all the indexes where NaN is found in a given array of numbers and NaN
 * @param {number[]} arr - The array of numbers to search for NaN values.
 * @returns {number[]} An array containing the indexes where NaN is found.
 */

const findNaNIndex = (arr) => {
  const NaNIndexes = [];
  for (let i = 0; i < arr.length; i++){
    if (Number.isNaN(arr[i])){
      NaNIndexes.push(i);
    }
  }
  return NaNIndexes;
};

