const express = require('express');

const { gameControllers } = require('../../controllers');
const { validator } = require('../../middlewares');
const { sowChain } = require('../../validation-chain');

const router = express.Router();
const { startGame, sow } = gameControllers;

router.post('/start', startGame);

router.post('/:id/sow', sowChain, validator, sow);

module.exports = router;
