/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-30 21:35:56
 * Last modified  : 2020-06-30 22:21:19
 */
const sauces = [
    'BBQ Sauce Dip',
    'Buffalo Sauce Dip',
    'Garlic Sauce Dip',
    'Pizza Sauce Dip',
    'Ranch Sauce Dip',
];

exports.complements = [
    {
        name: 'Chicken Poppers',
        description:
            'Delicious pieces of lightly breaded chicken breast, cooked in the oven and accompanied by your favorite sauce.',
        quantity: ['9pc', '15pc'],
        sauce: sauces,
    },
    {
        name: 'Wings',
        description:
            'Oven-roasted chicken wings topped with BBQ or Buffalo sauce.',
        quantity: ['6pc', '10pc'],
        topping: ['BBQ Sauce', 'Buffalo Sauce'],
        sauce: sauces,
    },
    {
        name: 'Pepperoni Rolls',
        description:
            'Delicious rolls of dough stuffed with Mozarella cheese and pepperoni.',
        quantity: '6pc',
    },
];

exports.vegetarianComplements = [
    {
        name: 'Cheesesticks',
        description:
            'Sticks of our fresh dough, varnished with garlic sauce and Mozzarella cheese, accompanied by our original pizza sauce. Choose from Original, Bacon or Six Cheese.',
        quantity: ['8"', '12"'],
    },
    {
        name: 'Garlic Parmessan Breadsticks',
        description:
            'Bread sticks varnished with garlic sauce and Parmesan cheese, accompanied by our original pizza sauce.',
        quantity: '10pc',
    },
    {
        name: 'Garlic Knots',
        description:
            'Fresh dough knots varnished with Garlic and Parmesan Sauce, accompanied by our Marinara sauce.',
        quantity: '8pc',
    },
    {
        name: 'Breadsticks',
        description: 'Delicious baked bread sticks.',
        quantity: '10pc',
    },
];
