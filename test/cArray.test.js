const CArray = require('../cArray');

it.skip('CArray', () => {
  const nums = new CArray(100);
  nums.setData();
  console.log(nums.toString());
});

/*
* 排序算法
* */

// 冒泡排序
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

// 选择排序
it.skip('selection sort order', () => {
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

// 插入排序
it.skip('insertion sort order', () => {
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

// 定步长的 希尔排序
it.skip('shell sort order', () => {
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

// 可变步长的 希尔排序
it.skip('shell sort1 order', () => {
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

// 合并排序
it.skip('merge sort order', () => {
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

// 快排
it.skip('quick sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  const data = nums.qSort(nums.dataStore);
  console.log('quick sort: ', data);
});
it('quick sort test speed', () => {
  const nums = new CArray(200000);
  nums.setData();
  const start = new Date().getTime();
  nums.qSort(nums.dataStore);
  const end = new Date().getTime();
  console.log(`quick speed: ${end - start}`);
});

// JavaScript 自带的 sort 方法
it.skip('js sort order', () => {
  const nums = new CArray(10);
  nums.setData();
  nums.dataStore.sort((a, b) => a - b);
  console.log('js sort: ', nums.dataStore);
});
it('js sort speed', () => {
  const nums = new CArray(200000);
  nums.setData();
  const start = new Date().getTime();
  nums.dataStore.sort((a, b) => a - b);
  const end = new Date().getTime();
  console.log(`js sort speed: ${end - start}`);
});

/*
* 检索算法
* */

// 顺序查找
it('seq search', () => {
  const nums = new CArray(10);
  nums.setData();
  const findNum = 3;
  console.log('origin array: ', nums.dataStore);
  const result = nums.seqSearch(nums.dataStore, findNum);
  console.log(`seq search find num: ${findNum}, find result: ${result}`);
});

// 查找最小值
it('search find min', () => {
  const nums = new CArray(10);
  nums.setData();
  console.log('origin array: ', nums.dataStore);
  const result = nums.findMin(nums.dataStore);
  console.log(`find min: ${result}`);
});

// 二分法查找
it('bin search', () => {
  const nums = new CArray(10);
  console.log('origin array: ', nums.dataStore);
  const result = nums.binSearch(nums.dataStore, 3);
  console.log(`bin search, find index: ${result}`);
});

it('lcs', () => {
  const word1 = 'heanqi';
  const word2 = 'weanqk';
  const l = CArray.lcs(word1, word2);
  console.log('cArray.test.js: 177 -> l -> ', l);
});

it('knapsack', () => {
  const value = [4, 5, 10];
  const size = [3, 4, 8];
  const capacity = 14;
  const n = 3;
  const t = CArray.dKnapsack(capacity, size, value, n);
  console.log('cArray.test.js: 185 -> t -> ', t);
});


