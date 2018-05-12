const Stack = require('../stack');
const {
  matchBracket,
  candys,
} = require('../pratice/stack');

it('stack', () => {
  const s = new Stack();
  s.push('a');
  s.push('b');
  s.push('c');
  expect(s.length()).toBe(3);
  expect(s.pop()).toBe('c');
  expect(s.length()).toBe(2);
  s.clear();
  expect(s.length()).toBe(0);
  expect(s.peek()).toBe(undefined);
});

it('数值转换', () => {
  let n = 8;
  const base = 2;

  const mulBase = (n, base) => {
    const s = new Stack();
    while (n > 0) {
      s.push(n % base);
      n = Math.floor(n /= base);
    }
    let converted = '';
    while (s.length() > 0) {
      converted += s.pop();
    }
    return converted;
  };

  expect(mulBase(n, base)).toBe('1000');
});

it('回文', () => {
  const isPalindrome = (word) => {
    const s = new Stack();
    for (let i = 0; i < word.length; i++) {
      s.push(word[i]);
    }
    let rword = '';
    while (s.length() > 0) {
      rword += s.pop();
    }
    if (word === rword) {
      return true;
    }
    return false;
  };

  expect(isPalindrome('89999998')).toBe(true);
  expect(isPalindrome('woaini')).toBe(false);
  expect(isPalindrome('heheh')).toBe(true);
});

it('matchBracket', () => {
  const exp1 = '3 + 1 - (8 * (2 - 4)';
  const exp2 = '4-(((2+3)-5)';

  expect(matchBracket(exp1)).toBe(8);
  expect(matchBracket(exp2)).toBe(2);
});

it('candy', () => {
  const candyArr = [1, 3, 2, 3, 2, 1, 2, 3, 2];
  expect(candys(candyArr, 3)).toEqual([1, 2, 2, 1, 2, 2]);
});

