var assert = require("assert")
var foldTen = require("../foldTenExamples")
var fold = require("../fold")
var map = require("../map")
var parse = require("../parseSentence")

describe('parse', function(){
  describe('#parse', function(){
    it('parse reknits correctly', function() {
	var arr = parse.parse(parse.s1);
	var reknit = parse.convertToString(arr);
        assert.equal(parse.s1,reknit);
    })
   })
  describe('#hemingway', function(){
    it('hemingway', function() {
	var s2 = "Jake, go pop that bartender and clean his clock.";
	var arr = parse.parse(s2);
	var hem = parse.hemingway(arr);
        assert.equal(parse.convertToString(hem),"Jake, go pop that bartender. clean his clock.");
    })
   })
})


