/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * Random selector from arrays
 *
 * @summary Contains helper functions to retrieve one or more randome items from an array
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 22:13:31
 * Last modified  : 2020-06-21 01:36:39
 */

exports.one = (array) => {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
};

exports.many = (array, min = 1, max = 4) => {
    var interval = max - min;
    var value = Math.floor(Math.random() * interval) + min;

    var setToReturn = new Set();

    var copyOfArr = Array.from(array);

    while (value != setToReturn.size) {
        var item = this.one(copyOfArr);
        var idxToRemove = copyOfArr.indexOf(item);
        if (idxToRemove > -1) {
            copyOfArr.splice(idxToRemove, 1);
        }
        setToReturn.add(item);
    }

    return Array.from(setToReturn);
};

exports.sample = (array, amount) => {
    var arrToReturn = [];
    var copyOfArr = Array.from(array);
    while (amount > 0) {
        var item = this.one(array);
        var idxToRemove = copyOfArr.indexOf(item);
        if (idxToRemove > -1) {
            copyOfArr.splice(idxToRemove, 1);
        }
        arrToReturn.push(item);
        amount--;
    }
    return arrToReturn;
};
