# Project Title
CMPT 315 Assignment 2 - make js functions and publish the package on npm
## Purpose
This library was published for learning purposes.
## Usage
**Install it:**
`npm install @puranik/CMPT315A2`
**Require it:**
`const _ = require('@puranik/CMPT315A2');`
**Call it:**
`const results = _.firstFunction()`
## Documentation
The following functions are currently implemented:
* `findNaNIndex()`: Find all the indexes where NaN is found in a given array of numbers and NaN. 
* `isArrayFactorChain()`: Return true or false if an array is a factor chain or not. 
* `countNumberOfArrays()`: Return the count for the number of arrays inside a given array. 
* `participants()`: Returns an array of all the player names (no player should be listed more than once). 
* `winnersObject()`: Returns an object which lists each participant, and a list of who they've beaten. 
* `biggestLoser()`: Returns the loser name with the biggest tally of loser_points. If a player is the winner, the loser_points are subtracted, and if a player is a loser, then the loser_points are added. Find the player with the largest tally of loser_points. 
