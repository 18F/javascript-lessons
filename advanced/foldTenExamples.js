var fold = require("./fold")

exports.concat = function (list) {
    return fold.foldl(function (a,b) { return a+b; },list,"");
}

exports.summation = function (list) {
    return fold.foldl(function (a,b) { return a+b; },list,0);
}

exports.product = function (list) {
    return fold.foldl(function (a,b) { return a*b; },list,1);
}

exports.maxNum = function (list) {
    return fold.foldl(function (a,b) { if (a > b) { return a; } else { return b; } },list,Number.MIN_VALUE);
}

// console.log(exports.concat(["a","b","c"]));
