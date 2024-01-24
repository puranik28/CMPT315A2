/**
 * Function returns an array of all the player names  
 * @param {Array} matches - The array of match objects to extract player names from.
 * @returns {Array} An array containing unique player names.
 */

const participants = (matches) => {
  const playerSet = new Set();
  matches.forEach((match) => {
    playerSet.add(match.winner);
    playerSet.add(match.loser);
  });
  
  return [...playerSet];  
};
  
