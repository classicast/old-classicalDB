var chai = require('chai');
var expect = chai.expect;

var funcs = require('./requestHandler');
var identify = funcs.func1;


describe('dummy test', function () {

  it('A should equal A', function () {
    expect(identify('A')).to.equal('A');
  });

});