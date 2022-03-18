const { NotFoundError } = require('../../models');

exports.notFoundHandler = (req, res, next) => {
  const error = new NotFoundError();

  next(error);
};
