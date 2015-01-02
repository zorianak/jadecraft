var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    should = require('chai').should(),
    assert = chai.assert,
    expect = chai.expect,
    charScript = require('../public/javascripts/char.js');
//    unescape = npmarmory.unescape;

chai.use(sinonChai);


// the char object takes in a jsonp object,
// and returns a JS object

describe("Char", function() {
//    describe("constructor", function() {
        it("should have a default name", function() {
            var result = new Char();
            expect(result.name).to.equal("I am a cat");
        });
        it("should set name if provided in json", function(){
//           var result = new Char({"name": "Monk"});
//            expect(result.name).to.equal("Monk");
        });
//    });
});
