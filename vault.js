'use strict';
module.exports = function () {
    let obj = {};

    function getValue(key, value) {
        if (obj[key] === undefined) {
            return null;
        } else {
            return obj[key];
        }
    }

    function setValue(key, value) {
        obj[key] = value;
    }

    return {
        getValue,
        setValue
    }
};