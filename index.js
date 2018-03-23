'use strict';

var util = require('handlebars-utils');

/**
 * Helper that renders the block if **both** of the given values are truthy.
 * If an inverse block is specified it will be rendered when falsy. Works as
 * a block helper, inline helper or subexpression.
 *
 * ```handlebars
 * <!-- { great: true, magnificent: true } -->
 * {{#and great magnificent}} A {{else}} B {{/and}}
 * <!-- results in: ' A ' -->
 * ```
 * @block
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @api public
 */

module.exports = function() {
  var len = arguments.length - 1;
  var options = arguments[len];
  var val = true;

  for (var i = 0; i < len; i++) {
    if (!arguments[i]) {
      val = false;
      break;
    }
  }
  return util.value(val, this, options);
};
