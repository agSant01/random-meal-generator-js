/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-21 10:31:57
 * Last modified  : 2020-06-30 23:08:20
 */
const { one } = require('./../../../utils/selectors');
const papadiaModel = require('./papadia-model');

exports.getRegular = () => {
    var response = {
        papadia: one(papadiaModel.papadias),
    };
    return Promise.resolve(response);
};

exports.getVegetarian = () => {
    var response = {
        papadia: one(papadiaModel.papadiasVegetarian),
    };
    return Promise.resolve(response);
};
