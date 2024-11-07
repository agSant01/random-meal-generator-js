/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-07-01 21:33:38
 * Last modified  : 2020-07-01 21:33:38
 */

const { one } = require('../../utils/selectors');

function addRestaurantLabel(data) {
    return {
        restaurant: 'Taco Maker',
        order: data,
    };
}

exports.welcome = (req, res, next) => {
    var agent = req.header('User-Agent');

    var newLine = '<br>';
    if (agent.startsWith('curl')) newLine = '\n';

    var msg =
        `This is Taco Maker meal generator. You can select from the following to satisfy your random needs:${
            newLine + newLine
        }` +
        `\u2022 /taco-maker/menu | For a list of promotions available in PR${
            newLine + newLine
        }` +
        `All these routes accept the argument output to select a JSON or TEXT outputs.${newLine}` +
        `Those are the only two supported response formats.${
            newLine + newLine
        }` +
        `Example: /taco-maker/menu?output=text${newLine}`;

    res.status(200).send(msg).end();
};

exports.getMenu = (req, res, next) => {
    // var selection = one(models);
    const jsonData = require('./taco-maker-menu.json');
    const data = addRestaurantLabel(jsonData);
    res.status(200).json(data).end();
};
