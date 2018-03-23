'use strict';

require('mocha');
var hbs = require('handlebars');
var assert = require('assert');
var and = require('./');

describe('handlebars-helper-and', function() {
  beforeEach(function() {
    hbs.registerHelper('and', and);
  });

  describe('block', function() {
    it('should render a block if both values are truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      assert.equal(fn({ great: true, magnificent: true }), 'A');
    });

    it('should render the inverse block if both values are not truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      assert.equal(fn({ great: true, magnificent: false }), 'B');
    });
  });

  describe('inline or subexpression', function() {
    it('should render a block if both values are truthy.', function() {
      var fn = hbs.compile('{{and great magnificent}}');
      assert.equal(fn({ great: true, magnificent: true }), 'true');
    });

    it('should render the inverse block if both values are not truthy.', function() {
      var fn = hbs.compile('{{and great magnificent}}');
      assert.equal(fn({ great: true, magnificent: false }), 'false');
    });

    it('should work as subexpressions', function() {
      var fn = hbs.compile('{{and (and a b) (and great magnificent)}}');
      assert.equal(fn({ great: true, magnificent: false }), 'false');
    });
  });
});
