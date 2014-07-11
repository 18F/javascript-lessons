var assert = require("assert")
var fold = require("../fold")

describe('foldl', function(){
  describe('#indexOf()', function(){
    it('foldl should add up some numbers', function() {
	    list = [3,4,5]
      assert.equal(fold.foldl(function plus(a,b) { return a+b; },list,0),12);
    })
    it('foldr should equal foldl for commutative functions', function() {
	    list = [3,4,5]
      assert.equal(fold.foldr(function plus(a,b) { return a+b; },list,0),
		  fold.foldl(function plus(a,b) { return a+b; },list,0));
    })
  })
})
