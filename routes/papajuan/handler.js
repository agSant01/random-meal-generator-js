const pizzaDao = require('./pizza/pizza');
const papadiaDao = require('./papadia/papadia');
const complementDao = require('./complements/complements');
const dessertDao = require('./desserts/desserts');
const drinksModel = require('./drinks/drinks-model');
const { one } = require('../../utils/selectors');
const promotionDao = require('./promotions/promotions');

const models = [pizzaDao, papadiaDao];

function addRestaurantLabel(data) {
    return {
        restaurant: 'Papa Juan',
        order: data,
    };
}

exports.welcome = (req, res, next) => {
    var agent = req.header('User-Agent');

    var newLine = '<br>';
    if (agent.startsWith('curl')) newLine = '\n';

    var msg =
        `This is Papa Juan's Random meal generator. You can select from the following to satisfy your random needs:${
            newLine + newLine
        }` +
        `\u2022 /papajuan/meal | For a completly random meal${newLine}` +
        `\u2022 /papajuan/meal/vegetarian | For a completly random and vegetarian meal${newLine}` +
        `\u2022 /papajuan/combo | For a completly random combo${newLine}` +
        `\u2022 /papajuan/combo/vegetarian | For a completly random and vegetarian combo${newLine}` +
        `\u2022 /papajuan/pizza | For a random pizza${newLine}` +
        `\u2022 /papajuan/pizza/vegetarian | For a completly random vegetarian pizza${newLine}` +
        `\u2022 /papajuan/papadia | For a completly random papadia${newLine}` +
        `\u2022 /papajuan/papadia/vegetarian | For a completly random and vegetarian papadia${newLine}` +
        `\u2022 /papajuan/side | For a completly random side${newLine}` +
        `\u2022 /papajuan/side/vegetarian | For a completly random and vegetarian side${newLine}` +
        `\u2022 /papajuan/dessert | For a completly random dessert${newLine}` +
        `\u2022 /papajuan/dessert/vegetarian | For a completly random and vegetarian dessert${newLine}` +
        `\u2022 /papajuan/promotions/pr | For a list of promotions available in PR${
            newLine + newLine
        }` +
        `All these routes accept the argument output to select a JSON or TEXT outputs.${newLine}` +
        `Those are the only two supported response formats.${
            newLine + newLine
        }` +
        `Example: /papajuan/meal/vegetarian?output=text${newLine}`;

    res.status(200).send(msg).end();
};

exports.getRandomMeal = (req, res, next) => {
    var selection = one(models);

    selection
        .getRegular()
        .then((data) => {
            res.locals.data = data;
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomVegetarianMeal = (req, res, next) => {
    var selection = one(models);

    selection
        .getVegetarian()
        .then((data) => {
            res.locals.data = data;
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomPizza = (req, res, next) => {
    pizzaDao
        .getRegular()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomPizzaVegetarian = (req, res, next) => {
    pizzaDao
        .getVegetarian()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomPapadia = (req, res, next) => {
    papadiaDao
        .getRegular()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomPapadiaVegetarian = (req, res, next) => {
    papadiaDao
        .getVegetarian()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomComplement = (req, res, next) => {
    complementDao
        .getRegular()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomComplementVegetarian = (req, res, next) => {
    complementDao
        .getVegetarian()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomDessert = (req, res, next) => {
    dessertDao
        .getRegular()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomDessertVegetarian = (req, res, next) => {
    dessertDao
        .getVegetarian()
        .then((data) => {
            res.locals.data = addRestaurantLabel(data);
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomCombo = (req, res, next) => {
    const mainMeal = one(models);

    mainMeal
        .getRegular()
        .then((meal) => {
            dessertDao
                .getRegular()
                .then((dessert) => {
                    complementDao
                        .getRegular()
                        .then((side) => {
                            res.locals.data = addRestaurantLabel({
                                main_plate: meal,
                                dessert: dessert,
                                side: side,
                                drink: one(drinksModel.drinks),
                            });
                            next();
                        })
                        .catch((err) => {
                            next(err);
                        });
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomComboVegetarian = (req, res, next) => {
    const mainMeal = one(models);

    mainMeal
        .getVegetarian()
        .then((meal) => {
            dessertDao
                .getVegetarian()
                .then((dessert) => {
                    complementDao
                        .getVegetarian()
                        .then((side) => {
                            res.locals.data = addRestaurantLabel({
                                main_plate: meal,
                                dessert: dessert,
                                side: side,
                                drink: one(drinksModel.drinks),
                            });
                            next();
                        })
                        .catch((err) => {
                            next(err);
                        });
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
};

exports.getPromotionsPR = (req, res, next) => {
    promotionDao.getPromotions({
        success(value) {
            res.status(200)
                .json({
                    restaurant: 'Papa Juan',
                    promotions: value,
                })
                .end();
        },
        failure(err) {
            next(new Error(err));
        },
    });
};
