var chain = require('..');
var expect = require('chai').expect;
var chainable;

beforeEach(function(){
  chainable = {
    value : "value",
    val : chain (function (value) {
      if(!value) return this.value;
      this.value = value; 
    })
  };
});

describe('chain(fn)', function(){
  it('should return itself if no value returned', function() {
    expect(chainable.val('value')).to.equal(chainable);
  })
  it('should return value if value returned', function() {
    expect(chainable.val()).to.equal('value');
  })
});