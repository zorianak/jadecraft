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
    it('should assign default stats', function() {
       var result = new Char({});
       expect(result.Agility).to.equal(0);
    });
    it('should assign stats', function() {
       var result = new Char({"stats":{"agi":1}});
       expect(result.Agility).to.equal(1);
    });
    it('should assign no item', function() {
        var result = new Char({});
        expect(result.Back).to.equal('No Item');
    });
    it('should assign items', function() {
        var result = new Char({"items":{"back":"Rawr"}});
        expect(result.Back).to.equal('Rawr');
    });
});
