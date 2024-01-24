/**
 * Function that counts for the number of arrays inside a given array.  
 * @param {Array} arr - The array to count the number of arrays within.
 * @returns {number} The count of arrays found within the nested structure.
 */

const countNumberOfArrays = (arr) => {
  let count = 0;
  const countArrays = (nestedArray) => {
    for (const element of nestedArray){
      if (Array.isArray(element)){
        count++;
        countArrays(element);
      }
    }
  };
  countArrays(arr);
  return count;
};

  
