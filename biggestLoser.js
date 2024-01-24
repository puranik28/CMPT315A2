/**
 * Function returns the loser name with the biggest tally of loser_points. 
 * @param {Array} matches - The array of match objects to analyze for loser points
 * @returns {string} The name of the participant with the highest tally of loser points
 */

const biggestLoser = (matches) => {
  const loserPointsTally = {};
  matches.forEach((match) => {
    loserPointsTally[match.loser] = (loserPointsTally[match.loser] || 0) + match.loser_points;
    loserPointsTally[match.winner] = (loserPointsTally[match.winner] || 0) - match.loser_points;
  });
  let biggestLoserName = '';
  let biggestLoserPoints = 0;
  for (const [player, points] of Object.entries(loserPointsTally)){
    if (points > biggestLoserPoints){
      biggestLoserPoints = points;
      biggestLoserName = player;
    }
  }
  return biggestLoserName;
};

module.exports = biggestLoser;
