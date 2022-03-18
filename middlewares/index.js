const { errorHandler } = require('./error-handler');
const { notFoundHandler } = require('./not-found-handler');
const { validator } = require('./validator');

module.exports = { validator, errorHandler, notFoundHandler };
