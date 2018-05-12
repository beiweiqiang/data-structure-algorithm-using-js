const List = require('../list');

it('List', () => {
  const l = new List();
  l.append('a');
  l.append('b');
  l.remove('b');
  expect(l.length()).toBe(1);

});

it('cursor', () => {
  const l = new List();
  l.append('a');
  l.append('b');
  l.append('c');
  l.front();
  expect(l.getElement()).toBe('a');
  l.next();
  expect(l.getElement()).toBe('b');
  l.end();
  expect(l.getElement()).toBe('c');
});

