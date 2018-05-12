const Deque = require('../deque');

it('deque', () => {
  const d = new Deque();

  d.endEnqueue('a');
  d.frontEnqueue('b');
  d.frontEnqueue('c');
  expect(d.toString()).toEqual('c,b,a');
});