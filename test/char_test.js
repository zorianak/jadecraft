// the char object takes in a jsonp object,
// and returns a JS object

var chai = require('chai'),
    should = require('chai').should(),
    expect = require('chai').expect,
    charscript = require('../public/javascripts/char'),
    escape = charscript.escape,
    unescape = charscript.unescape,
    char = charscript.Char;

//describe("Char", function() {
//    describe("constructor", function() {
//        it("should have a default name", function() {
//            var result = new Char();
//            expect(result.name).to.equal("Anon monk");
//        });
//        it("should set name if provided in json", function(){
//           var result = new Char({"name": "Monk"});
//            expect(result.name).to.equal("Monk");
//        });
//    });
//});

describe('#char', function() {
    it('should have a default name', function() {
        var result = new Char();
        expect(result.name).to.equal('Anon monk');
    });
});

describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts \' into &#39;', function() {
    escape('\'').should.equal('&#39;');
  });

  it('converts < into &lt;', function() {
    escape('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function() {
    escape('>').should.equal('&gt;');
  });
});

describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &#39; into \'', function() {
    unescape('&#39;').should.equal('\'');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });
});
