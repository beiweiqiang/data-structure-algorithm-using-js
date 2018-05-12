const Queue = require('../queue');
const {
  baseSort,
} = require('../pratice/queue');

it('queue', () => {
  const q = new Queue();
  q.enqueue('a');
  q.enqueue('b');
  expect(q.toString()).toBe('a,b');
  q.enqueue('c');
  expect(q.front()).toBe('a');
  expect(q.empty()).toBe(false);
});

it('base sort', () => {
  const nums = [1, 4, 2, 65, 24, 31, 53, 66];

  expect(baseSort(nums)).toEqual([1, 2, 4, 24, 31, 53, 65, 66]);
});
