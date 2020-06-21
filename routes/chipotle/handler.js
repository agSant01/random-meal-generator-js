/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 *
 * @summary Handler for Chipotle
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:26:19
 * Last modified  : 2020-06-19 22:52:32
 */
const burritoDao = require('./daos/burrito');

exports.welcome = (req, res, next) => {
    var agent = req.header('User-Agent');

    var newLine = '<br>';
    if (agent.startsWith('curl')) newLine = '\n';

    var msg =
        `This is Chipotle's Random meal generator. You can select from the following to satisfy your random needs:${
            newLine + newLine
        }` +
        `\u2022 /chipotle/meal | For a completly random meal${newLine}` +
        `\u2022 /chipotle/meal/vegan | For a completly random and vegan meal${
            newLine + newLine
        }` +
        `All these routes accept the argument output to select a JSON or TEXT outputs.${newLine}` +
        `Those are the only two supported response formats.${
            newLine + newLine
        }` +
        `Example: /chipotle/meal/vegan?output=text${newLine}`;

    res.status(200).send(msg).end();
};

exports.getRandomMeal = (req, res, next) => {
    burritoDao
        .getRegular()
        .then((data) => {
            res.locals.data = data;
            next();
        })
        .catch((err) => {
            next(err);
        });
};

exports.getRandomVeganMeal = (req, res, next) => {
    burritoDao
        .getVegan()
        .then((data) => {
            res.locals.data = data;
            next();
        })
        .catch((err) => {
            next(err);
        });
};
