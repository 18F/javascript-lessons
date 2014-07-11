var assert = require("assert")
var map = require("../map")

describe('map', function(){
  describe('', function(){
    it('map applies square', function() {
	  list = [3,4,5];
    // Note that by concatenating to a string, we create a string, which can
    // be compared, whereas to compaare arrays we would have to right a comparison.
    assert.equal(map.map(function square(a) { return a*a; },list)+"",[9,16,25]+"");
    })
  })
})

describe('recrusvieMap1', function(){
  describe('', function(){
    it('map applies square', function() {
	  list = [3,4,5];
    // Note that by concatenating to a string, we create a string, which can
    // be compared, whereas to compaare arrays we would have to right a comparison.
    assert.equal(map.recursiveMap1(function square(a) { return a*a; },list)+"",[9,16,25]+"");
    })
  })
})

describe('recrusvieMap2', function(){
  describe('', function(){
    it('map applies square', function() {
	  list = [3,4,5];
    // Note that by concatenating to a string, we create a string, which can
    // be compared, whereas to compaare arrays we would have to right a comparison.
    assert.equal(map.recursiveMap2(function square(a) { return a*a; },list)+"",[9,16,25]+"");
    })
  })
})

