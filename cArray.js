class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;

    for (let i = 0; i < numElements; i++) {
      this.dataStore[i] = i;
    }
  }

  setData() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; i++) {
      this.dataStore[i] = 0;
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.dataStore.length; i++) {
      const obj = this.dataStore[i];
      str += `${obj} `;
      if (i > 0 && i % 10 === 0) {
        str += '\n';
      }
    }
    return str;
  }

  swap(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }


  /*
  * 基本排序算法
  * 外循环会遍历数组的每一项, 内循环用于比较元素
  * */

  /*
  * 冒泡排序
  * 升序
  * 最大的数会冒泡到数组右端
  * */
  bubbleSort() {
    const numElements = this.dataStore.length;
    // 外循环剩下最后一个的时候不用比较, 所以是 i > 1
    // i 代表 有 i 个元素需要进行比较
    for (let i = numElements; i > 1; i--) {
      // 内循环是元素间的比较
      // j 代表 一个元素需要和其他元素比较 j 次
      for (let j = 0; j < i - 1; j++) {
        if (this.dataStore[j] > this.dataStore[j + 1]) {
          this.swap(this.dataStore, j, j + 1);
        }
      }
    }
  }

  /*
  * 选择排序
  * 取第一个元素, 将它与其他元素进行比较, 检查完以后, 最小的元素会放在第一个位置
  * */
  selectionSort() {
    let min;
    const numElements = this.dataStore.length;
    for (let i = 0; i < numElements - 1; i++) {
      // 第 i 个元素作为最小的元素
      min = i;
      // 比较的元素从 j 到 numElements-1
      for (let j = i + 1; j < numElements; j++) {
        if (this.dataStore[j] < this.dataStore[min]) {
          // 将第 j 个元素作为最小值
          min = j;
        }
        // 如果最小值不是一开始定的那个, 则进行交换
        if (min !== i && j === numElements - 1) {
          this.swap(this.dataStore, i, min);
        }
      }
    }
  }

  /*
  * 插入排序
  * 外循环将数组元素挨个移动, 内循环对外循环中选中的元素及它后面的那个元素进行比较
  *
  * 算法:
  * 取出其中一个元素,
  * 与前面的所有元素进行比较, 把 比该元素小的 所有元素往后挪一位,
  * 直到不挪, 将该元素放在这个位置
  *
  * */
  insertionSort() {
    let tmp, inner;
    const numElements = this.dataStore.length;
    for (let i = 1; i < numElements; i++) {
      // 手里拿着一个 tmp
      tmp = this.dataStore[i];
      inner = i;

      /*
      * inner 是一个游标
      *
      * */
      while (inner > 0 && this.dataStore[inner - 1] >= tmp) {
        // 把 inner-1 位置上的元素移动到 inner 位置, 即往后挪一个位置
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }

      this.dataStore[inner] = tmp;
    }
  }


  /*
  * 高级排序算法
  * */

  /*
  * 希尔排序
  * 在插入排序的基础上进行改进
  *
  * 理解希尔排序的一个方式是: (来自wiki)
  * 将一个数组列在一个表中, 并对列进行排序
  *
  * eg:
  * [ 13 14 94 33 82 25 59 94 65 23 45 27 73 25 39 10 ]
  * 按照步长为 5 开始排序:
  * 13 14 94 33 82
  * 25 59 94 65 23
  * 45 27 73 25 39
  * 10
  *
  * 对列进行排序, 结果为:
  * 10 14 73 25 23
  * 13 27 94 33 39
  * 25 59 94 65 82
  * 45
  *
  * 将上述数字连接, 得到: [ 10 14 73 25 23 13 27 94 33 39 25 59 94 65 82 45 ]
  * 然后以步长为 3 进行排序:
  * 10 14 73
  * 25 23 13
  * 27 94 33
  * 39 25 59
  * 94 65 82
  * 45
  *
  * 排序后变成:
  * 10 14 13
  * 25 23 33
  * 27 25 59
  * 39 65 73
  * 45 94 82
  * 94
  *
  * 最后以步长为 1 进行排序, 也就是 插入排序.
  *
  *
  * */
  shellSort() {
    // 斐波那契数列 1, 9, 34, 182, 836, 4025, 19001
    // const gaps = [182, 34, 9, 1];
    // const gaps = [109, 41, 19, 5, 1];
    const gaps = [5, 3, 1];

    for (let g = 0; g < gaps.length; g++) {

      /*
      * i 为间隔序列的 第二个元素
      * */
      for (let i = gaps[g]; i < this.dataStore.length; i++) {
        // 手里拿着一个 tmp,
        // 比如间隔为 5, tmp 为 dataStore[5], 它准备会去和 dataStore[0] 比较
        const tmp = this.dataStore[i];
        let j;
        /*
        * this.dataStore[j - gaps[g]] : 取前一个 与当前位置 间隔 gaps[g] 的数据
        * j -= gaps[g] : 去
        * */
        for (j = i; j >= gaps[g] && this.dataStore[j - gaps[g]] > tmp; j -= gaps[g]) {
          /*
          * 与插入排序一样, 将间隔 gaps[g] 的数据往后挪
          * */
          this.dataStore[j] = this.dataStore[j - gaps[g]];
        }
        this.dataStore[j] = tmp;
      }
    }
  }

  /*
  * 动态计算间隔序列的希尔排序
  * */
  shellSort1() {
    const N = this.dataStore.length;
    let h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h > 1) {
      for (let i = h; i < N; i++) {
        const tmp = this.dataStore[i];
        let j = i;
        for (; j >= h && this.dataStore[j - h] > tmp; j -= h) {
          this.dataStore[j] = this.dataStore[j - h];
        }
        this.dataStore[j] = tmp;
      }
      h = (h - 1) / 3;
    }
  }


  /*
  * 归并排序
  * 实现原理: 把一系列排好序的子序列合并成一个大的完整的有序序列
  *
  * 自底向上归并排序
  * */
  mergeSort() {
    const arr = this.dataStore;
    if (arr.length < 2) {
      return;
    }
    // 设置步长为 1, 即子列的长度都为 1
    let step = 1;
    // 左子序列, 右子序列 的起始 index
    let left, right;
    while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
        this.mergeArrays(arr, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      // 如果从上面循环出来的 right 还是小于 arr.length
      if (right < arr.length) {
        this.mergeArrays(arr, left, left + step, right, arr.length);
      }
      step *= 2;
    }
  }

  mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    // 多加 1 是因为要添加哨兵值
    const rightArr = new Array(stopRight - startRight + 1);
    const leftArr = new Array(stopLeft - startLeft + 1);

    // 将右子序列赋给新的数组 rightArr
    let k = startRight;
    for (let i = 0; i < rightArr.length - 1; i++) {
      rightArr[i] = arr[k];
      ++k;
    }

    // 将左子序列赋给新的数组 leftArr
    k = startLeft;
    for (let i = 0; i < leftArr.length - 1; i++) {
      leftArr[i] = arr[k];
      ++k;
    }

    // 为什么要设置哨兵值? ( 666 )
    // 不用出现一个情况, 其中一个数组为空了, 需要将另一个数组的剩余元素全插入序列
    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity;

    // 将新排序好的序列覆盖原来 arr 序列
    let m = 0, n = 0;
    for (let i = startLeft; i < stopRight; i++) {
      if (leftArr[m] <= rightArr[n]) {
        arr[i] = leftArr[m];
        m++;
      } else {
        arr[i] = rightArr[n];
        n++;
      }
    }
    // console.log('cArray.js: 283 -> mergeArrays -> ', leftArr);
    // console.log('cArray.js: 284 -> mergeArrays -> ', rightArr);
  }


  /*
  * 快速排序
  * 通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列
  *
  * 算法:
  * 1 选择一个基准元素, 将列表分隔成两个子序列
  * 2 将所有小于基准值的元素放到基准值前面, 所有大于基准值的元素放到基准值后面
  * 3 分别对 较小元素的子序列 和 较大元素的子序列 重复步骤1, 2
  * */
  qSort(list) {
    if (list.length === 0) {
      return [];
    }
    if (list.length === 1) {
      return list;
    }
    const lesser = [];
    const greater = [];
    const pivot = list[0];
    for (let i = 1; i < list.length; i++) {
      const obj = list[i];
      if (obj < pivot) {
        lesser.push(obj);
      } else {
        greater.push(obj);
      }
    }
    return this.qSort(lesser).concat(pivot, this.qSort(greater));
  }

  /*
  * 检索算法 -------
  * */

  /*
  * 顺序查找
  * */
  seqSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i];
      if (obj === data) {
        return i;
      }
    }
    return -1;
  }

  /*
  * 查找最小值
  * */
  findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min;
  }

  /*
  * 查找最大值
  * */
  findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max;
  }

  /*
  * 使用自组织数据
  * 80-20原则: 指对某一数据集执行的 80% 的查找操作都是对其中 20% 的数据元素进行查找
  * */

  /*
  * 在顺序查找中进行自组织数据
  * 查找最频繁的元素最终会移动到数据集的起始位置
  * */
  seqSearch1(arr, data) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === data) {
        if (i > 0) {
          this.swap(arr, i, i - 1);
        }
        return true;
      }
    }
    return false;
  }

  /*
  * 顺序查找
  * 将找到的元素移动到数据集的起始位置, 但是如果这个元素已经很接近起始位置, 则不会对它的位置进行交换
  * 原则:仅当数据位于数据集的前 20% 元素之外, 该数据才需要被重新移动到数据集的起始位置
  * */
  seqSearch2(arr, data) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === data) {
        if (i > (arr.length * 0.2)) {
          this.swap(arr, i, 0);
        }
        return true;
      }
    }
    return false;
  }

  /*
  * 二分查找算法
  * 只对有序的数据集有效
  * 算法:
  * 1 将数组的第一个位置设置为下边界 (0)
  * 2 将数组的最后一个元素的位置设置为上边界 (数组的长度减1)
  * 3 若下边界等于或小于上边界, 做如下操作:
  *   a 将中点设置为 (上边界加下边界) 除以 2
  *   b 如果中点的元素小于查询的值, 则将下边界设置为中点元素所在下标加 1
  *   c 如果中点的元素大于查询的值, 则将上边界设置为中点元素所在下标减 1
  *   d 否则中点元素即为要查找的数据
  * */
  binSearch(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
      const mid = Math.floor((upperBound + lowerBound) / 2);
      if (arr[mid] < data) {
        lowerBound = mid;
      } else if (arr[mid > data]) {
        upperBound = mid;
      } else {
        return mid;
      }
    }
    return -1;
  }

  /*
  * 计算重复次数
  * 找到元素以后, 弄两个循环, 一个向左, 一个向右, 查找与数据一样的其他数据的个数
  * */
  count(arr, data) {
    let count = 0;
    let position = this.binSearch(arr, data);
    if (position > -1) {
      ++count;
      for (let i = position - 1; i > 0; --i) {
        if (arr[i] === data) {
          ++count;
        } else {
          break;
        }
      }
      for (let i = position + 1; i < arr.length; ++i) {
        if (arr[i] === data) {
          ++count;
        } else {
          break;
        }
      }
    }
  }

  /*
  * 高级算法
  * 动态规划, 贪心算法
  * */

  /*
  * 动态规划
  * 动态规划通常会使用一个数组来建立一张表, 用于存放被分解成众多子问题的解.
  * 举例, 比如斐波那契数列
  * */
  // 正常来说
  recurFib(n) {
    if (n < 2) {
      return n;
    }
    else {
      return this.recurFib(n - 1) + this.recurFib(n - 2);
    }
  }

  /*
  * 上面的斐波那契数列计算为什么不好?
  * 为了计算 fib(5), 它会计算 fib(3), fib(4)
  * fib(3) = fib(2) + fib(1), fib(4) = fib(3) [这个已经计算过] + fib(2)
  *          fib(2) = fib(1) + fib(0)
  * 有太多的值在递归的过程中被重新计算
  * 需要将已经计算过的值记录下来
  * 所有的子问题通常存储在一个数组里面便于访问
  * */
  dynFib(n) {
    // 参数 n 是第几个数, 对应数组中的 index 是 n-1

    const val = [];
    for (let i = 0; i < n; i++) {
      val[i] = 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    else {
      val[1] = 1;
      val[2] = 2;
      for (let i = 3; i <= n; i++) {
        val[i] = val[i - 1] + val[i - 2];
      }
      return val[n - 1];
    }
  }

  /*
  * 查找最长公共子串
  * 使用动态规划算法
  * 算法:
  *   使用一个二维数组存储两个字符串相同位置的字符串比较结果
  *   初始化时, 该数组的每一个元素被设置为 0
  *   每次在这两个数组的相同位置发现了匹配, 就将数组对应行和列的元素加 1, 否则保持为 0
  * */
  static lcs(word1, word2) {
    let max = 0;
    let index = 0;
    const lcsarr = new Array(word1.length + 1);
    for (let i = 0; i <= word1.length + 1; i++) {
      lcsarr[i] = new Array(word2.length + 1);
      for (let j = 0; j <= word2.length + 1; j++) {
        lcsarr[i][j] = 0;
      }
    }
    for (let i = 0; i <= word1.length; i++) {
      for (let j = 0; j <= word2.length; j++) {
        if (i === 0 || j === 0) {
          lcsarr[i][j] = 0;
        } else {
          if (word1[i - 1] === word2[j - 1]) {
            lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
          } else {
            lcsarr[i][j] = 0;
          }
        }
        if (max < lcsarr[i][j]) {
          max = lcsarr[i][j];
          index = i;
        }
      }
    }
    let str = '';
    if (max === 0) {
      return '';
    } else {
      for (let i = index - max; i <= max; i++) {
        str += word2[i];
      }
      return str;
    }
  }

  /*
  * 背包问题: 递归解决方案
  *
  * capacity: 背包总容量
  * size: 商品尺寸数组
  * value: 商品价值数组
  * n: 商品个数
  * */
  static knapsack(capacity, size, value, n) {
    if (n === 0 || capacity === 0) {
      return 0;
    }

    if (size[n - 1] > capacity) {
      return this.knapsack(capacity, size, value, n - 1);
    } else {
      return max(
        value[n - 1] + this.knapsack(capacity - size[n - 1], size, value, n - 1),
        this.knapsack(capacity, size, value, n - 1)
      );
    }

    function max(a, b) {
      return a > b ? a : b;
    }
  }

  /*
  * 背包问题: 动态规划方案
  * */
  static dKnapsack(capacity, size, value, n) {
    const K = [];
    for (let i = 0; i <= capacity + 1; i++) {
      K[i] = [];
    }
    for (let i = 0; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (i === 0 || w === 0) {
          K[i][w] = 0;
        } else if (size[i - 1] <= w) {
          K[i][w] = max(
            value[i - 1] + K[i - 1][w - size[i - 1]],
            K[i - 1][w]
          );
        } else {
          K[i][w] = K[i - 1][w];
        }
      }
    }
    return K[n][capacity];

    function max(a, b) {
      return a > b ? a : b;
    }
  }

}

module.exports = CArray;