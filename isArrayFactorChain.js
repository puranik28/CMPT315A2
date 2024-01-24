/**
 * Function to check whether an array is a factor chain or not. 
 * @param {number[]} arr - The array of numbers to check for a factor chain.
 * @returns {boolean} Returns true if the array is a factor chain, false otherwise.
 */

const isArrayFactorChain = (arr) => {
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i + 1] % arr[i] !== 0){
      return false;
    }
  }
  return true;
};


