class Stack {
  constructor() {
    this.dataSource = [];

    // 指示空的位置
    this.top = 0;
  }

  toArray() {
    const arr = [];
    for (let i = 0; i < this.top; i++) {
      const obj = this.dataSource[i];
      arr.push(obj);
    }
    return arr;
  }

  push(element) {
    this.dataSource[this.top++] = element;
  }

  pop() {
    return this.dataSource[--this.top];
  }

  peek() {
    return this.dataSource[this.top - 1];
  }

  length() {
    return this.top;
  }

  // 牛逼
  clear() {
    this.top = 0;
  }

}

module.exports = Stack;