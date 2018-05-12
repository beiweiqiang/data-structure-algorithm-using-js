const LoopLinkedList = require('../loopLinkedList');

function suicide(n, m) {
  const l = new LoopLinkedList();
  l.setHeadElement(0);
  for (let i = 1; i < n; i++) {
    l.insert(i, i - 1);
  }
  l.setContainHead(true);
  while (l.length() >= m) {
    l.advance(m);
    l.remove();
  }
  return l.display();
}


module.exports = {
  suicide: suicide,
};
