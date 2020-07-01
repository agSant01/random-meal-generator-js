/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 *
 * @summary Data for pizza
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:12:37
 * Last modified  : 2020-06-19 22:12:52
 */

exports.dough = ['Traditional', 'Thin Crust'];

exports.size = ['Small', 'Medium', 'Large', 'Xtra Large'];

exports.cheeses = [
    'Parmesan Cheese',
    'Romano Cheese',
    'Provolone Cheese',
    'Fontina Cheese',
    'Asiago Cheese',
    'Mozzarella Cheese',
];

exports.meatIngredients = [
    'Sausage', // 0
    'Pepperonni',
    'Chicken', // 2
    'Bacon', // 3
    'Ham',
    'Italian Sausage',
    'Beef', // 6
    'Pork Sausage (Chorizo)',
    'Anchovies',
];

exports.veganIngredients = [
    'Onion',
    'Pineapple',
    'Black Olives',
    'Mushroom',
    'Green Pepper',
    'Tomato',
];

exports.baseSauces = ['Tomato Sauce', 'Alfredo Sauce'];

exports.additionalToppings = [
    'Sazonador Italiano',
    'BBQ Sauce',
    'Garlic Sauce',
    'Alfredo Sauce with Spinach',
];

exports.signaturePizzas = [
    // Salchicha, Pepperoni, Mezcla de 6 Quesos (Parmesano, Romano, Provolone, Fontina, Asiago y Mozzarella) y Sazonador Italiano.
    // ', '.join(cheeses[0:5]
    {
        name: "John's Favorite",
        ingredients: [
            this.meatIngredients[0],
            this.meatIngredients[1],
            `6 cheeses (${this.cheeses.slice(0, 5).join(', ')})`,
        ],
    },
    // Pollo, Tocino, Cebolla, Piña, Salsa BBQ como base y Queso Mozzarella.
    {
        name: 'Hawaiian Chicken BBQ',
        ingredients: [
            this.meatIngredients[2],
            this.meatIngredients[3],
            this.veganIngredients[0],
            this.veganIngredients[1],
            `${this.additionalToppings[1]} as base sauce`,
            this.cheeses[5],
        ],
    },
    // Pollo, Jamon, Cebolla, Salsa BBQ como base.
    {
        name: 'Chicken BBQ',
        ingredients: [
            this.meatIngredients[2],
            this.meatIngredients[4],
            this.veganIngredients[0],
            `${this.additionalToppings[1]} as base sauce`,
        ],
    },
    // Pepperoni, Salchicha Italiana, Jamón, Champiñón Fresco, Cebolla, Pimiento Verde, Aceitunas Negras.
    {
        name: 'The Works',
        ingredients: [
            this.meatIngredients[1],
            this.meatIngredients[4],
            this.meatIngredients[5],
            this.veganIngredients[2],
            this.veganIngredients[3],
            this.veganIngredients[4],
        ],
    },
    // Pepperoni, Jamón, Salchicha, Tocino, Carne de Res.
    {
        name: 'All The Meats',
        ingredients: [
            this.meatIngredients[1],
            this.meatIngredients[4],
            this.meatIngredients[0],
            this.meatIngredients[3],
            this.meatIngredients[6],
        ],
    },
    // Pepperoni, Jamón, Salchicha Italiana, Cebolla y Pimientos Verdes.
    {
        name: 'New York',
        ingredients: [
            this.meatIngredients[1],
            this.meatIngredients[4],
            this.meatIngredients[5],
            this.veganIngredients[0],
            this.veganIngredients[4],
        ],
    },
];

exports.specialtyPizzas = [
    // Mezcla de 6 Quesos (Parmesano, Romano, Provolone, Fontina, Asiago y Mozzarella) y Sazonador Italiano
    {
        name: 'Six Cheese',
        ingredients: [
            `6 cheeses (${this.cheeses.slice(0, 5).join(', ')})`,
            this.additionalToppings[0],
        ],
    },
    {
        name: 'Garden Fresh',
        ingredients: [
            this.veganIngredients[0],
            this.veganIngredients[2],
            this.veganIngredients[3],
            this.veganIngredients[4],
            this.veganIngredients[5],
        ],
    },
    {
        name: 'Hawaiana',
        ingredients: [
            this.veganIngredients[1],
            this.meatIngredients[4],
            `${this.baseSauces[0]} as base sauce`,
        ],
    },
    // Salsa Alfredo con Espinaca como base y Queso Mozzarella
    {
        name: 'Spinach Alfredo',
        ingredients: [
            `${this.additionalToppings[3]} as base sauce`,
            this.cheeses[5],
        ],
    },
    // Pollo, Jamón, Tocineta, y Salsa de Ajó
    {
        name: 'Puertorriqueña',
        ingredients: [
            this.meatIngredients[2],
            this.meatIngredients[3],
            this.meatIngredients[4],
            this.additionalToppings[2],
        ],
    },
    // Pollo, tocino, jamón, tomates.
    {
        name: 'Chicken Club',
        ingredients: [
            this.meatIngredients[2],
            this.meatIngredients[3],
            this.meatIngredients[4],
            this.veganIngredients[5],
        ],
    },
];
