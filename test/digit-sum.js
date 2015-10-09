var test = require('tape');
var digitSum = require('../digit-sum');

test('digitSum', function (t) {
  'use strict';

  t.plan(12);

  t.equal(digitSum(0), 0);
  t.equal(digitSum(1234), 10);
  t.equal(digitSum(-1234), 0);
  t.equal(digitSum(389), 20);
  t.equal(digitSum(-389), 0);
  t.equal(digitSum(3890), 20);
  t.equal(digitSum(-3890), 0);
  t.equal(digitSum(-Infinity), 0);
  t.equal(digitSum(Infinity), Infinity);
  t.equal(digitSum({}), 0);
  t.equal(digitSum([]), 0);
  t.equal(digitSum(true), 0);
});
