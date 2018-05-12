const DeLinkedList = require('../deLinkedList');

it('deLinkedList', () => {
  const dl = new DeLinkedList();
  dl.insert('a', dl.headElement);
  dl.insert('b', 'a');
  dl.insert('c', dl.headElement);

  expect(dl.display()).toEqual(['c', 'a', 'b']);
});

it('deLinkedList remove', () => {
  const l = new DeLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');
  l.remove('b');
  expect(l.display()).toEqual(['a', 'c']);

  const nl = new DeLinkedList();
  nl.insert('a', l.headElement);
  nl.insert('b', 'a');
  nl.insert('c', 'b');
  nl.remove('c');
  expect(nl.display()).toEqual(['a', 'b']);
});

it('display reverse', () => {
  const dl = new DeLinkedList();
  dl.insert('a', dl.headElement);
  dl.insert('b', 'a');
  dl.insert('c', dl.headElement);

  expect(dl.displayReverse()).toEqual(['b', 'a', 'c']);
});

it('back', () => {
  const l = new DeLinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');
  l.advance(3);
  l.back(2);
  expect(l.show()).toEqual('a');
});