const pizzaDao = require('./daos/pizza');
const papadiaDao = require('./daos/papadia');
const { one } = require('../../utils/selectors');

const models = [pizzaDao, papadiaDao];

exports.welcome = (req, res, next) => {
    var agent = req.header('User-Agent');

    var newLine = '<br>';
    if (agent.startsWith('curl')) newLine = '\n';

    var msg =
        `This is Papa Juan's Random meal generator. You can select from the following to satisfy your random needs:${
            newLine + newLine
        }` +
        `\u2022 /papajuan/meal | For a completly random meal${newLine}` +
        `\u2022 /papajuan/meal/vegetarian | For a completly random and vegan meal${newLine}` +
        `\u2022 /papajuan/pizza | For a random pizza${newLine}` +
        `\u2022 /papajuan/pizza/vegetarian | For a completly random vegan pizza${
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
            res.locals.data = data;
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
            res.locals.data = data;
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
            res.locals.data = data;
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
            res.locals.data = data;
            next();
        })
        .catch((err) => {
            next(err);
        });
};
