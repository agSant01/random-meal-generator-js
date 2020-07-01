/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-30 22:45:57
 * Last modified  : 2020-06-30 23:10:04
 */
const { one } = require('./../../../utils/selectors');
const dessertsModel = require('./desserts-model');

exports.getRegular = () => {
    const response = one(dessertsModel.desserts);
    return Promise.resolve(response);
};

exports.getVegetarian = () => {
    return this.getRegular();
};
