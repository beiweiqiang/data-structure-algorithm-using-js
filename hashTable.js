/*
* 散列函数选择:
*
* 1 键为整型, key % this.table.length (除留余数法)
* 2 键为字符串, 将键中每个字符的 ASCII 码值相加, 然后除以 this.table.length 取余数
* 3 键为字符串, 计算字符串中每个字符的 ASCII码, 相加的时候每次要乘以一个质数.
*
* 碰撞处理:
* 1 开链法: 创建第二组数组, 数组称为链. 在链中使用2个连续的单元格, 第一个存放键值, 第二个存放数据
* 2 线性探测法:
*
* */

class HashTable {
  constructor() {
    this.table = new Array(137);
    this.values = [];
    this.buildChains();
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  betterHash(string) {
    // 设置一个质数
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    return total % this.table.length;
  }

  showDistro() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i][0]) {
        const obj = this.table[i];
        console.log('hashTable.js: 27 -> showDistro -> ', i, ' -> ', obj);
      }
    }
  }

  put(key, data) {
    let pos = this.betterHash(key);

    /*
    * 开链法:
    * */
    // let index = 0;
    // if (!this.table[pos][index]) {
    //   // 使用了两个连续的单元格, 第一个存key, 第二个存data
    //   this.table[pos][index] = key;
    //   this.table[pos][index + 1] = data;
    // } else {
    //   while (this.table[pos][index]) {
    //     ++index;
    //   }
    //   this.table[pos][index] = key;
    //   this.table[pos][index + 1] = data;
    // }

    /*
    * 线性探测法
    * */
    if (!this.table[pos]) {
      this.table[pos] = key;
      this.values[pos] = data;
    } else {
      while (this.table[pos]) {
        pos++;
      }
      this.table[pos] = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    /*
    * 开链法:
    * */
    // let index = 0;
    // const pos = this.betterHash(key);
    // while (this.table[pos][index] !== key) {
    //   index += 2;
    // }
    // return this.table[pos][index + 1];

    /*
    * 线性探测法:
    * */
    let hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
      for (let i = hash; this.table[hash]; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
  }
}

module.exports = HashTable;