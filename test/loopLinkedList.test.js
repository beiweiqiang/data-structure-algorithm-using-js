const LoopLinkedList = require('../loopLinkedList');
const {
  suicide,
} = require('../pratice/loopLinkedList');

it('loopLinkedList', () => {
  const l = new LoopLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');
  expect(l.display()).toEqual(['a', 'b', 'c']);
});

it('loopLinkedList remove item 1', () => {
  const l = new LoopLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');

  l.remove('b');
  expect(l.display()).toEqual(['a', 'c']);
});

it('loopLinkedList remove item 2', () => {
  const l = new LoopLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');

  l.remove('c');
  expect(l.display()).toEqual(['a', 'b']);
});

it('display', () => {
  const l = new LoopLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');

  expect(l.display().length).toEqual(3);
});

it('practice suicide', () => {
  const a = suicide(40, 3);
  console.log('loopLinkedList.test.js: 36 -> left index array -> ', a);
});




