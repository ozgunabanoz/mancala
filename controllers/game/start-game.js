const { startGameServices, SuccessResponse } = require('../../services');

const { initGame } = startGameServices;

exports.startGame = async (req, res, next) => {
  try {
    const newGame = await initGame();
    const response = new SuccessResponse(undefined, newGame);

    return response.send(res);
  } catch (error) {
    next(error);
  }
};
