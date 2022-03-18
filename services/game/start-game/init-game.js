const { Game } = require('../../../models');

exports.initGame = async () => {
  const newGame = await Game.create();

  return newGame;
};
