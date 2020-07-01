/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-30 22:45:57
 * Last modified  : 2020-06-30 22:48:04
 */
const { one } = require('./../../../utils/selectors');
const dessertsModel = require('./desserts-model');

function addRestaurantLabel(data) {
    return {
        restaurant: 'Papa Juan',
        order: { dessert: data },
    };
}

exports.getRegular = () => {
    const response = addRestaurantLabel(one(dessertsModel.desserts));
    return Promise.resolve(response);
};

exports.getVegetarian = () => {
    return this.getRegular();
};
