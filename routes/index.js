const gameRoutes = require('./game');

exports.router = (app) => {
  app.use('/game', gameRoutes);
};
