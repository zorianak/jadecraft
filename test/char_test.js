// the char object takes in a jsonp object,
// and returns a JS object

var chai = require('chai'),
    should = require('chai').should(),
    expect = require('chai').expect,
    charscript = require('../public/javascripts/char'),
    Char = charscript.Char;


describe('#char', function() {
    it('should have a default name', function() {
        var result = new Char({});
        expect(result.name).to.equal('Anon monk');
    });
    it('should assign a name', function() {
        var result = new Char({"name": "Monk"});
        expect(result.name).to.equal('Monk');
    });
});
