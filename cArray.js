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





}

module.exports = CArray;