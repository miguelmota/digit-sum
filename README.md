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

t.equal(digitSum(1234), 10);
t.equal(digitSum(3890), 20);
t.equal(digitSum(Infinity), Infinity);

t.equal(digitSum(-1234), 0);
t.equal(digitSum(-3890), 0);
t.equal(digitSum(-Infinity), 0);
```

# Test

```bash
npm test
```

# License

MIT
