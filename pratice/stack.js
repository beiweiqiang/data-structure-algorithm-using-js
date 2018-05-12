const Stack = require('../stack');

/*
* 匹配括号是否缺失, 返回缺失的位置, 否则返回 -1
* 算法:
* 右括号 1
* 左括号 -1
*
* */
function matchBracket(matchStr) {
  const s = new Stack();
  for (let i = 0; i < matchStr.length; i++) {
    let str = matchStr[i];
    if (['(', ')'].indexOf(str) !== -1) {
      s.push({
        str,
        index: i,
      });
    }
  }
  let acc = 0;
  while (s.length() > 0) {
    const item = s.pop();
    if (item.str === ')') {
      acc += 1;
    }
    if (item.str === '(') {
      acc -= 1;
    }
    if (acc < 0) {
      return item.index;
    }
  }
  return -1;
}

function candys(candyArr, excldeElement) {
  const s = new Stack();
  const tmp = new Stack();
  for (let i = 0; i < candyArr.length; i++) {
    const candy = candyArr[i];
    s.push(candy);
  }
  while (s.length() > 0) {
    const element = s.pop();
    if (element !== excldeElement) {
      tmp.push(element);
    }
  }
  while (tmp.length() > 0) {
    s.push(tmp.pop());
  }
  return s.toArray();
}

module.exports = {
  matchBracket,
  candys,
};