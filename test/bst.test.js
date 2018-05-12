const BST = require('../bst');

it('bst in order', () => {
  const b = new BST();
  b.insert(53);
  b.insert(35);
  b.insert(56);
  b.insert(92);
  b.insert(22);
  b.insert(14);
  b.inOrder(b.root);
});


it('bst max min', () => {
  const b = new BST();
  b.insert(53);
  b.insert(35);
  b.insert(56);
  b.insert(92);
  b.insert(22);
  b.insert(14);

  expect(b.getMin()).toBe(14);
  expect(b.getMax()).toBe(92);
});

it('bst find', () => {
  const b = new BST();
  b.insert(53);
  b.insert(35);
  b.insert(56);
  b.insert(92);
  b.insert(22);
  b.insert(14);

  expect(b.find(35).data).toBe(35);
});

it('bst remove', () => {
  const b = new BST();
  b.insert(53);
  b.insert(35);
  b.insert(56);
  b.insert(92);
  b.insert(22);
  b.insert(14);
  b.remove(56);
  b.inOrder(b.root);
});