var express = require('express');
var handler = require('./handler');
var responseFormatter = require('./../../middlewares/output-format');

var router = express.Router();

router.get('/', handler.welcome);

router.get('/meal', handler.getRandomMeal, responseFormatter.outputFormat);

router.get(
    '/meal/vegetarian',
    handler.getRandomVegetarianMeal,
    responseFormatter.outputFormat
);

router.get('/pizza', handler.getRandomPizza, responseFormatter.outputFormat);

router.get(
    '/pizza/vegetarian',
    handler.getRandomPizzaVegetarian,
    responseFormatter.outputFormat
);

router.get(
    '/papadia',
    handler.getRandomPapadia,
    responseFormatter.outputFormat
);

router.get(
    '/papadia/vegetarian',
    handler.getRandomPapadiaVegetarian,
    responseFormatter.outputFormat
);

router.get(
    '/complement',
    handler.getRandomComplement,
    responseFormatter.outputFormat
);

router.get(
    '/complement/vegetarian',
    handler.getRandomComplementVegetarian,
    responseFormatter.outputFormat
);

module.exports = router;
