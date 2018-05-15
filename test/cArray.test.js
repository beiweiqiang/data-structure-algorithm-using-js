const CArray = require('../cArray');

it.skip('CArray', () => {
  const nums = new CArray(100);
  nums.setData();
  console.log(nums.toString());
});

it('bubble sort', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.bubbleSort();
  const end = new Date().getTime();
  console.log(`bubble: ${end - start}`);
});

it('selection sort', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.selectionSort();
  const end = new Date().getTime();
  console.log(`selection: ${end - start}`);
});

it('insertion sort', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.insertionSort();
  const end = new Date().getTime();
  console.log(`insertion: ${end - start}`);
});