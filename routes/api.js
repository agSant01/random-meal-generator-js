var express = require('express');
var chipotleRoutes = require('./chipotle/routes');
var papaJuanRoutes = require('./papajuan/routes');
var tacoMakerRoutes = require('./taco-maker/routes');

var router = express.Router();

router.use('/chipotle', chipotleRoutes);
router.use('/papajuan', papaJuanRoutes);
router.use('/taco-maker', tacoMakerRoutes);

router.get('/', (req, res, next) => {
    var response = {
        message: 'Welcome to the Random Meal Generator API',
        restaurants: [
            '/chipotle  | To see the diferent available random menu option',
            '/papajuan  | To see the diferent available random menu option',
            '/taco-maker | To see the diferent available random menu option',
        ],
    };
    res.status(200).json(response);
});

module.exports = router;
