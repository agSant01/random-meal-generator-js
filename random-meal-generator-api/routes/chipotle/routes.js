var express = require('express');
var handler = require('./handler');
var { outputFormat } = require('../../middlewares/output-format');

var router = express.Router();

router.get('/', handler.welcome);

router.get('/meal', handler.getRandomMeal, outputFormat);

router.get('/meal/vegetarian', handler.getRandomVeganMeal, outputFormat);

module.exports = router;
