const { sowServices, SuccessResponse } = require('../../services');

const {
  checkGame,
  sowStones,
  determineNextTurn,
  isOwnEmptyPit,
  isGameEnded,
  collectOpponentStones,
  calculateScore,
  saveGame,
  createResponseMessage,
} = sowServices;

exports.sow = async (req, res, next) => {
  try {
    const {
      params: { id },
      body: { player, pit },
    } = req;
    const game = await checkGame(id, player); // check if the game exists or it meets the conditions
    let { pits, lastIndex } = sowStones(game, pit, player); // sow the stones
    const { nextTurn, isOwnMancala } = determineNextTurn(lastIndex, player); // determine which player is next

    // if the latest position is not player's mancala, check if that pit is empty and belongs to them
    if (!isOwnMancala) pits = isOwnEmptyPit(pits, lastIndex, player);

    const gameEnded = isGameEnded(pits, player); // check if the game ends

    // if the game ends, collect opposition's stones into their mancala
    if (gameEnded) pits = collectOpponentStones(pits, player);

    const score = calculateScore(pits); // calculate the latest score
    const newGame = await saveGame(game, pits, nextTurn, gameEnded, score); // save the game
    const message = createResponseMessage(gameEnded, nextTurn, score); // get a response message
    const response = new SuccessResponse(message, newGame);

    return response.send(res);
  } catch (error) {
    next(error);
  }
};
