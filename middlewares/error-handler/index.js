const { HttpError, InternalError } = require('../../models');
const { ErrorResponse } = require('../../services');

exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  const error = err instanceof HttpError ? err : new InternalError();
  const errorResponse = new ErrorResponse(error);

  errorResponse.send(res);
};
