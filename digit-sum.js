(function(root) {
  'use strict';

  function digitSum(n) {
    if (!(typeof n === 'number' || n instanceof Number)) {
      return 0;
    }

    if (n <= 0) {
      return 0;
    } else if (n < 10) {
      return n;
    } else if (n === Infinity) {
      return Infinity;
    }

    return (n % 10) + digitSum((n / 10)>>0);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = digitSum;
    }
    exports.digitSum = digitSum;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return digitSum;
    });
  } else {
    root.digitSum = digitSum;
  }

})(this);
