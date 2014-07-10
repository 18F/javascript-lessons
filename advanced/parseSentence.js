var foldTen = require("./foldTenExamples")
var fold = require("./fold")
var map = require("./map")
var s1 = "It was the best of times, it was the worst of times.";

var s2 = "Jake, go pop that bartender and clean his clock.";

var mlk2 = "I have a dream that one day on the red hills of Georgia the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood."

exports.parse = function parse(s) {
    return s.match(/[-\w]+|[,]|[.]/g);
}

exports.convertToString = function convertToString(list) {
    return fold.foldl(function (a,b) {
	if (b == '')
	    return a;
	if ((b[0] == ',') || (b[0] == '.')) {
	    return a+""+b;
        } else {
    	    return a+" "+b;
	}},
	         list,"");
        };


exports.hemingway = function(arr) {
    return map.map(function aToP(w) { 
	return (w == "and") ? "." : w;
	},arr);
}

exports.s1 = s1;
exports.mlk2 = mlk2;

