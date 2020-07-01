/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @summary Dao for pizza meal
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:12:11
 * Last modified  : 2020-06-30 21:33:53
 */

const { one, many, sample } = require('./../../../utils/selectors');
const pizzaModel = require('./pizza-model');

const pizzaTypes = [
    (vegan) => getPizzas(pizzaModel.specialtyPizzas, vegan),
    (vegan) =>
        getPizzas(
            vegan ? pizzaModel.specialtyPizzas : pizzaModel.signaturePizzas,
            vegan
        ),
    randomPizza,
];

function addRestaurantLabel(data) {
    return {
        restaurant: 'Papa Juan',
        order: data,
    };
}

function randomPizza(vegan = false) {
    var ingredients = new Set();
    var was_vegan = false;
    if (Math.random() > 0.5) {
        //  get vegies
        var veggies = many(pizzaModel.veganIngredients, 0, 3);
        was_vegan = true;
        veggies.forEach((veggie) => ingredients.add(veggie));
    }
    if ((Math.random() > 0.5 || !was_vegan) && !vegan) {
        // get meats
        var min_ = was_vegan ? 1 : 2;
        var meats = many(pizzaModel.meatIngredients, min_, 3);
        meats.forEach((meat) => ingredients.add(meat));
    }

    if (ingredients.size == 0) ingredients.add('Cheese');

    return {
        name: 'Custom Made Creation, Order by Ingredient',
        ingredients: Array.from(ingredients),
        base_sauce: one(pizzaModel.baseSauces),
    };
}

function getPizzas(pizzaList, vegan) {
    var pizza_ = one(pizzaList);
    if (vegan) {
        var veganPizzas = pizzaList.filter((pizza) =>
            isVegan(pizza.ingredients)
        );
        pizza_ = one(veganPizzas);
    }

    pizza_.base_sauce = one(pizzaModel.baseSauces);

    return pizza_;
}

function isVegan(ingredients) {
    var _meat_ingredients_set = new Set(pizzaModel.meatIngredients);
    for (var ingredient of ingredients) {
        if (_meat_ingredients_set.has(ingredient)) return false;
    }
    return true;
}

exports.getRegular = () => {
    var response = null;
    if (Math.random() > 0.5) {
        // get whole pizza
        var desicion = one(pizzaTypes);
        response = addRestaurantLabel({
            pizza: desicion(false),
        });
    } else {
        // get half & half
        var halfs = sample(pizzaTypes, 2);
        // console.log(halfs);
        response = addRestaurantLabel({
            pizza: {
                first_half: halfs[0](false),
                second_half: halfs[1](false),
            },
        });
    }

    return Promise.resolve(response);
};

exports.getVegetarian = () => {
    var response = null;
    if (Math.random() > 0.5) {
        // get whole pizza
        var desicion = one(pizzaTypes);
        response = addRestaurantLabel({
            pizza: desicion(true),
        });
    } else {
        // get half & half
        var halfs = sample(pizzaTypes, 2);
        // console.log(halfs);
        response = addRestaurantLabel({
            pizza: {
                first_half: halfs[0](true),
                second_half: halfs[1](true),
            },
        });
    }

    return Promise.resolve(response);
};
