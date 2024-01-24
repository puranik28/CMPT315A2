/**
 * Function returns an object which lists each participant, and a list of who they've beaten.   
 * @param {Array} matches - The array of match objects to extract player names from.
 * @returns {Object} An object listing each participant and their defeated opponents.
 */

const winnersObject = (matches) => {
  const result = {};
  matches.forEach((match) => {
    if (!result[match.winner]){
      result[match.winner] = [];
    }
    if (match.loser){
      result[match.winner].push(match.loser);
    } 
    else{
      result[match.winner] = [];
    }
  });
  return result;
};

module.exports = winnersObject;

