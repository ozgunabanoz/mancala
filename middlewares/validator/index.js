const { validationResult } = require('express-validator');

const { BadRequestError } = require('../../models');

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsObj = {};

    errors.array().forEach(({ param, msg }) => {
      Object.assign(errorsObj, { [param]: msg });
    });

    const error = new BadRequestError(undefined, errorsObj);

    next(error);
  }

  next();
};
