/*!
 * build-regex <https://github.com/jonschlinkert/build-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var expect = require('chai').expect;
var buildRegex = require('..');

describe('buildRegex()', function () {
  it('should create a regex group when more than one pattern is passed', function () {
    var actual = buildRegex(['a', 'b']);
    expect(actual).to.eql(new RegExp('(a|b)'));
    expect(actual).to.eql(/(a|b)/);
  });

  it('should create a regex group when more than one pattern is passed', function () {
    var actual = buildRegex(['a', 'b', 'c']);
    expect(actual).to.eql(new RegExp('(a|b|c)'));
    expect(actual).to.eql(/(a|b|c)/);
  });

  it('should not create a regex group when one pattern is passed', function () {
    var actual = buildRegex('a');
    expect(actual).to.eql(new RegExp('a'));
    expect(actual).to.eql(/a/);
  });
});

describe('when flags are passed as a second parameter', function () {
  it('should build the regex group with the flags', function () {
    var actual = buildRegex('a', 'gi');
    expect(actual).to.eql(new RegExp('a', 'gi'));
    expect(actual).to.eql(/a/gi);
  });

  it('should build the regex group with the flags', function () {
    var actual = buildRegex(['a', 'b', 'c'], 'gi');
    expect(actual).to.eql(new RegExp('(a|b|c)', 'gi'));
    expect(actual).to.eql(/(a|b|c)/gi);
  });
});
