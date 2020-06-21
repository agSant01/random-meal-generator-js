var express = require('express');
var handler = require('./handler');
var responseFormatter = require('./../../middlewares/output-format');

var router = express.Router();

router.get('/', handler.welcome);

router.get('/meal', handler.getRandomMeal, responseFormatter.outputFormat);

router.get(
    '/meal/vegan',
    handler.getRandomVeganMeal,
    responseFormatter.outputFormat
);

router.get('/pizza', handler.getRandomPizza, responseFormatter.outputFormat);

router.get(
    '/pizza/vegan',
    handler.getRandomPizzaVegan,
    responseFormatter.outputFormat
);

module.exports = router;
