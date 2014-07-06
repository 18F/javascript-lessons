var assert = require("assert")
var foldTen = require("../foldTenExamples")
var fold = require("../fold")

describe('foldTen', function(){
  describe('#foldTenConcat', function(){
    it('concat works', function() {
	list = ["Courage","Honesty","Creativity"]
        assert.equal(foldTen.concat(list),"CourageHonestyCreativity");
    })
  })
  describe('#foldTenConcat', function(){
    it('summation works', function() {
	list = [10,12,14]
        assert.equal(foldTen.summation(list),36);
    })
  })

  describe('#foldTenConcat', function(){
    it('product works', function() {
	list = [10,12,14]
        assert.equal(foldTen.product(list),10*12*14);
    })
  })

  describe('#foldTenConcat', function(){
    it('max num works', function() {
	list = [10,12,14]
        assert.equal(foldTen.maxNum(list),14);
    })
  })

  describe('#foldTenConcat', function(){
    it('rms num works', function() {
	list = [10,12,14]
        assert.equal(foldTen.rms(list),Math.sqrt(100+144+14*14));
    })
  })

})
