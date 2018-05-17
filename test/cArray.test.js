const CArray = require('../cArray');

it.skip('CArray', () => {
  const nums = new CArray(100);
  nums.setData();
  console.log(nums.toString());
});

it.skip('bubble sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.bubbleSort();
  console.log('bubble sort: ', nums.dataStore);
});
it('bubble sort', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.bubbleSort();
  const end = new Date().getTime();
  console.log(`bubble speed: ${end - start}`);
});

it('selection sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.selectionSort();
  console.log('selection sort: ', nums.dataStore);
});
it('selection sort', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.selectionSort();
  const end = new Date().getTime();
  console.log(`selection speed: ${end - start}`);
});

it('insertion sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.insertionSort();
  console.log('insertion sort: ', nums.dataStore);
});
it('insertion sort test speed', () => {
  const nums = new CArray(20000);
  nums.setData();
  const start = new Date().getTime();
  nums.insertionSort();
  const end = new Date().getTime();
  console.log(`insertion speed: ${end - start}`);
});

it('shell sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.shellSort();
  console.log('shell sort: ', nums.dataStore);
});
it('shell sort test speed', () => {
  const nums = new CArray(200000);
  nums.setData();
  const start = new Date().getTime();
  nums.shellSort();
  const end = new Date().getTime();
  console.log(`shell speed: ${end - start}`);
});

it('shell sort1 order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.shellSort1();
  console.log('shell1 sort: ', nums.dataStore);
});
it('shell sort1 test speed', () => {
  const nums = new CArray(200000);
  nums.setData();
  const start = new Date().getTime();
  nums.shellSort1();
  const end = new Date().getTime();
  console.log(`shell1 speed: ${end - start}`);
});

it('merge sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.mergeSort();
  console.log('merge sort: ', nums.dataStore);
});
it('merge sort test speed', () => {
  const nums = new CArray(200000);
  nums.setData();
  const start = new Date().getTime();
  nums.mergeSort();
  const end = new Date().getTime();
  console.log(`merge speed: ${end - start}`);
});