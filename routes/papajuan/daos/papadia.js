/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-21 10:31:57
 * Last modified  : 2020-06-21 10:47:55
 */
const { one } = require('./../../../utils/selectors');
const papadiaModel = require('./papadia-model');

function addRestaurantLabel(data) {
    return {
        restaurant: 'Papa Juan',
        order: data,
    };
}

exports.getRegular = () => {
    var response = addRestaurantLabel({
        papadia: one(papadiaModel.papadias),
    });
    return Promise.resolve(response);
};

exports.getVegetarian = () => {
    var response = addRestaurantLabel({
        papadia: one(papadiaModel.papadiasVegetarian),
    });
    return Promise.resolve(response);
};
