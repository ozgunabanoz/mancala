const { body } = require('express-validator');

// validation chain for play route
exports.sowChain = [
  body('player')
    .exists({ checkNull: true })
    .isInt({ min: 0, max: 1 })
    .withMessage('Player must be 0 or 1'),
  body('pit')
    .exists({ checkNull: true })
    .isInt({ min: 0, max: 5 })
    .withMessage('Pit must be between 0 and 5'),
];
