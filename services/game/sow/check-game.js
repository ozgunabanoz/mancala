const { Game, BadRequestError } = require('../../../models');

const throwError = (message) => {
  const error = new BadRequestError(message);

  throw error;
};

// check if the given id points to an existing game or if it is active or if it is the player's turn

exports.checkGame = async (id, player) => {
  const game = await Game.findById(id);

  if (!game) throwError('Game not found');

  const { active, turn } = game;

  if (!active) throwError('Game is not active');

  if (turn !== player) throwError('Wrong player');

  return game;
};
