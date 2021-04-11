/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-30 21:35:35
 * Last modified  : 2020-06-30 23:09:18
 */
const { one } = require('./../../../utils/selectors');
const complementsModel = require('./complements-model');

exports.getRegular = () => {
    const totalMenu = complementsModel.complements.concat(
        complementsModel.vegetarianComplements
    );

    var item = one(totalMenu);

    if (item.quantity && item.quantity.constructor == Array) {
        item.quantity = one(item.quantity);
    }

    if (item.topping && item.topping.constructor == Array) {
        item.topping = one(item.topping);
    }

    if (item.sauce && item.sauce.constructor == Array) {
        item.sauce = one(item.sauce);
    }

    return Promise.resolve(item);
};

exports.getVegetarian = () => {
    var item = one(complementsModel.vegetarianComplements);

    if (item.quantity && item.quantity.constructor == Array) {
        item.quantity = one(item.quantity);
    }

    if (item.topping && item.topping.constructor == Array) {
        item.topping = one(item.topping);
    }

    if (item.sauce && item.sauce.constructor == Array) {
        item.sauce = one(item.sauce);
    }

    return Promise.resolve(item);
};
