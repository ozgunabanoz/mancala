const { calculateScore } = require('./calculate-score');
const { checkGame } = require('./check-game');
const { collectOpponentStones } = require('./collect-opponent-stones');
const { createResponseMessage } = require('./create-response-message');
const { determineNextTurn } = require('./determine-next-turn');
const { isGameEnded } = require('./is-game-ended');
const { isOwnEmptyPit } = require('./is-own-empty-pit');
const { saveGame } = require('./save-game');
const { sowStones } = require('./sow-stones');

exports.sowServices = {
  checkGame,
  sowStones,
  determineNextTurn,
  isOwnEmptyPit,
  isGameEnded,
  collectOpponentStones,
  calculateScore,
  saveGame,
  createResponseMessage,
};
