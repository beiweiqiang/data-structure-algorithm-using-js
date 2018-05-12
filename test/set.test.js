const Set = require('../set');

it('set show', () => {
  const s = new Set();
  s.add('e');
  s.add({a: 1});
  s.add(function b() {

  })
  expect(s.show().length).toBe(3);
});

it('set union', () => {
  const s = new Set();
  s.add('e');
  s.add({a: 1});
  s.add('c');

  const s1 = new Set();
  s1.add('a');
  s1.add('b');
  s1.add('c');

  expect(s.union(s1).show()).toEqual([
    'e',
    {a:1},
    'c',
    'a',
    'b'
  ]);
});

it('set intersect', () => {
  const s = new Set();
  s.add('e');
  s.add({a: 1});
  s.add('c');

  const s1 = new Set();
  s1.add('a');
  s1.add('b');
  s1.add('c');

  expect(s.intersect(s1).show()).toEqual([
    'c'
  ]);
});

it('set subset', () => {
  const s = new Set();
  s.add('e');
  s.add({a: 1});
  s.add('c');
  s.add('b')

  const s1 = new Set();
  s1.add('a');
  s1.add('b');
  s1.add('c');

  const s2 = new Set();
  s2.add('e');
  s2.add('b');
  s2.add('c');

  expect(s2.subset(s)).toBe(true);
  expect(s1.subset(s)).toBe(false);
});

it('set difference', () => {
  const s = new Set();
  s.add('e');
  s.add({a: 1});
  s.add('c');
  s.add('b')

  const s1 = new Set();
  s1.add('a');
  s1.add('b');
  s1.add('c');

  expect(s1.difference(s).show()).toEqual([
    'a'
  ]);
});

it('set higher', () => {
  const s = new Set();
  s.add(44);
  s.add(32);
  s.add(95);
  s.add(56);

  expect(s.higher(33)).toBe(44);
});

