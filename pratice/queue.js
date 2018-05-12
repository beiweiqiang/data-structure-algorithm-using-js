const Queue = require('../queue');

/*
* 基数排序
*
* 算法:
* 对于 0-99 的数字, 基数排序会将数据集扫描 2 次
* 比如: 91, 46, 85, 15, 92, 35, 31, 22
* 第一次, 按个位上的数字排序, 然后放到对应的队列中:
* bin 0:
* bin 1: 91, 31
* bin 2: 92, 22
* bin 3:
* bin 4:
* bin 5: 85, 15, 35
* bin 6: 46
* bin 7:
* bin 8:
* bin 9:
*
* 然后队列按序依次出队, 得到:
* 91, 31, 92, 22, 85, 15, 35, 46
*
* 第二次, 按十位上的数字排序, 然后放到对应的队列中:
* bin 0:
* bin 1: 15
* bin 2: 22
* bin 3: 31, 35
* bin 4: 46
* bin 5:
* bin 6:
* bin 7:
* bin 8: 85
* bin 9: 91, 92
*
* 然后队列按序依次出队, 得到:
* 15, 22, 31, 35, 46, 85, 91, 92
*
* */
function baseSort(nums) {
  // 创建队列 数组 0 - 9
  const qs = [];
  for (let i = 0; i < 10; i++) {
    qs.push(new Queue());
  }

  /*
  * nums 准备排序的数组
  * queues 队列 数组
  * digit 表示 1 或 10, 个位或者十位
  * */
  function distribute(nums, queues, digit) {
    for (let i = 0; i < nums.length; i++) {
      const obj = nums[i];
      if (digit === 1) {
        queues[obj % 10].enqueue(obj);
      }
      if (digit === 10) {
        queues[Math.floor(obj / 10)].enqueue(obj);
      }
    }
  }

  function collect(queues, nums) {
    let index = 0;
    for (let i = 0; i < 10; i++) {
      while (!queues[i].empty()) {
        nums[index++] = queues[i].dequeue();
      }
    }
  }

  // 根据个位入队列
  distribute(nums, qs, 1);
  // 收集数组
  collect(qs, nums);
//  根据十位入队列
  distribute(nums, qs, 10);
  collect(qs, nums);
  return nums;
}


module.exports = {
  baseSort,
};
