class Set {
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  }
  remove(data) {
    const pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  }
  size() {
    return this.dataStore.length;
  }

  /*
  * 并集
  * 算法: 将第一个集合内的元素加入一个临时集合, 检查第二个集合,
  * 将第二个集合内不属于第一个集合的元素, 加入临时集合
  *
  * */
  union(set) {
    const tmp = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      tmp.add(this.dataStore[i]);
    }

    // TODO: 这里获取了内部属性 dataStore, 合适吗?
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tmp.contains(set.dataStore[i])) {
        tmp.add(set.dataStore[i]);
      }
    }

    return tmp;
  }

  contains(data) {
    return this.dataStore.indexOf(data) > -1;
  }

  /*
  * 相交
  * 算法: 建立一个临时集合, 如果第一个集合内的元素也在第二个集合内,
  * 加入到临时集合内
  * */
  intersect(set) {
    const tmp = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      const obj = this.dataStore[i];
      if (set.contains(obj)) {
        tmp.add(obj);
      }
    }
    return tmp;
  }

  /*
  * 子集, 检查该集合是否是传入的 set 的子集
  * */
  subset(set) {
    if (this.size() > set.size()) {
      return false;
    }
    for(const item of this.dataStore) {
      if (!set.contains(item)) {
        return false;
      }
    }
    return true;
  }

  /*
  * 补集: 属于第一个集合, 但是不属于第二个集合
  * 算法: 建立一个临时集合, 遍历第一个集合, 看属于第二个集合吗,
  * 不属于的加入临时集合
  * */
  difference(set) {
    const tmp = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      const obj = this.dataStore[i];
      if (!set.contains(obj)) {
        tmp.add(obj);
      }
    }
    return tmp;
  }

  show() {
    return this.dataStore;
  }

  /*
  * 传入一个元素,
  * 一个比较函数, 函数接受两个参数, 一个原传入元素, 一个比较的元素. 返回 Boolean
  *
  *
  * */
  higher(element) {
    let min = this.dataStore[0];
    for (let i = 1; i < this.dataStore.length; i++) {
      const obj = this.dataStore[i];
      if (obj < min && obj > element) {
        min = obj;
      }
    }
    return min;
  }


}

module.exports = Set;