exports.saveGame = async (game, pits, turn, gameEnded, score) => {
  const data = { pits, score, active: !gameEnded, turn };

  Object.assign(game, data);
  await game.save();
  return game;
};
