# digitsum

> Sum the digits of a number.

# Install

```bash
npm install digitsum
```

```bash
bower install digit-sum
```

# Usage

```javascript
var digitSum = require('digitsum');

console.log(digitSum(1234)); // 10
console.log(digitSum(3890)); 20
console.log(digitSum(Infinity)); // Infinity

console.log(digitSum(-1234)); // 0
console.log(digitSum(-3890)); // 0
console.log(digitSum(-Infinity)); // 0
```

# Test

```bash
npm test
```

# License

MIT
