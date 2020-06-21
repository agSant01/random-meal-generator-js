/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:29:50
 * Last modified  : 2020-06-19 22:42:52
 */
const burritoModel = require('./burrito-model');
const { one, many } = require('./../../../utils/selectors');

function veggies() {
    if (Math.random() > 0.5) return 'Get Veggies today';

    return "Don't get veggies today";
}

function chips() {
    var should_get = Math.random() > 0.5;
    if (should_get) return 'You should get chips today';
    return "Emm, don't get chips today";
}

function tortilla() {
    var should_get = Math.random() > 0.5;
    if (should_get) return 'You should get tortilla today';
    return "Emm, don't get tortilla today";
}

function addRestaurantLabel(data) {
    return {
        restaurant: "'Favorite' Taco Place",
        order: data,
    };
}

exports.getRegular = () => {
    var response = {
        style: one(burritoModel.style),
        rice: one(burritoModel.rice),
        beans: one(burritoModel.beans),
        protein: one(burritoModel.protein),
        veggies: veggies(),
        toppings: many(burritoModel.topping),
        chips: chips(),
        side_tortilla: tortilla(),
    };

    response = addRestaurantLabel(response);

    return Promise.resolve(response);
};

exports.getVegan = () => {
    var response = {
        style: one(burritoModel.style),
        rice: one(burritoModel.rice),
        beans: one(burritoModel.beans),
        veggies: veggies(),
        toppings: many(burritoModel.topping),
        chips: chips(),
        side_tortilla: tortilla(),
    };
    response = addRestaurantLabel(response);

    return Promise.resolve(response);
};
