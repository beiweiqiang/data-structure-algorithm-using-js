const Dictionary = require('../dictionary');

it('dictionary', () => {
  const d = new Dictionary();
  d.add('a', 14);
  d.add('b', 15);
  expect(d.find('a')).toBe(14);
});
