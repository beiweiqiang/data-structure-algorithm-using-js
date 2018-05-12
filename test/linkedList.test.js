const LinkedList = require('../linkedList');

it('linkedList', () => {
  const l = new LinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', l.headElement);

  expect(l.display()).toEqual(['c', 'a', 'b']);
});

it('linkedList remove', () => {
  const l = new LinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');
  l.remove('b');
  expect(l.display()).toEqual(['a', 'c']);

  const nl = new LinkedList();
  nl.insert('a', l.headElement);
  nl.insert('b', 'a');
  nl.insert('c', 'b');
  nl.remove('c');
  expect(nl.display()).toEqual(['a', 'b']);
});

it('linkedList advance', () => {
  const l = new LinkedList();
  l.insert('a', l.headElement);
  l.insert('b', 'a');
  l.insert('c', 'b');
  l.advance(2);
  expect(l.show()).toEqual('b');

});
