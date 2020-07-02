/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-07-01 20:52:15
 * Last modified  : 2020-07-01 21:06:29
 */
const pizzaDao = require('./../pizza/pizza');
const papadiaDao = require('./../papadia/papadia');
const complementDao = require('./../complements/complements');
const dessertDao = require('./../desserts/desserts');
const drinksModel = require('./../drinks/drinks-model');
const { one } = require('./../../../utils/selectors');

const models = [papadiaDao, pizzaDao];

exports.getRegular = async () => {
    const mainMealDao = one(models);

    const mainMeal = await mainMealDao.getRegular();

    const dessert = await dessertDao.getRegular();

    const side = await complementDao.getRegular();

    const drink = one(drinksModel.drinks);

    return {
        combo: {
            main_plate: mainMeal,
            dessert: dessert,
            side: side,
            drink: drink,
        },
    };
};

exports.getVegetarian = async () => {
    const mainMealDao = one(models);

    const mainMeal = await mainMealDao.getVegetarian();

    const dessert = await dessertDao.getVegetarian();

    const side = await complementDao.getVegetarian();

    const drink = one(drinksModel.drinks);

    return {
        combo: {
            main_plate: mainMeal,
            dessert: dessert,
            side: side,
            drink: drink,
        },
    };
};
