const HashTable = require('../hashTable');

it('hashTable', () => {
  const h = new HashTable();
  const arr = [
    'aaa',
    'bbbbbbb',
    'ea'
  ];
  arr.forEach(item => h.put(item));
  h.showDistro();
});

it('put get', () => {
  const h = new HashTable();
  h.put('heanqi', 3910212);
  h.put('kk', 4729);
  h.put('bei', 9864);

  expect(h.get('kk')).toBe(4729);
});