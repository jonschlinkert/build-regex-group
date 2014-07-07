/*!
 * build-regex-group <https://github.com/jonschlinkert/build-regex-group>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var arrayify = require('arrayify-compact');

// Build RegExp patterns
module.exports = function buildRegexGroup(re, flags) {
  // If it's already regex, return.
  if(re instanceof RegExp) {
    if (flags.length) {
      return new RegExp(re.source, flags);
    }
    return re;
  }

  // continue if it's a string or array
  re = arrayify(re);
  var len = re.length;
  re = (len > 0) ? re.join('|') : re;

  if(len > 1) {
    re = '(' + re + ')';
  }

  return new RegExp(re, flags);
};