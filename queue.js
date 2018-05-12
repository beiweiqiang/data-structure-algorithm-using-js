class Queue {
  constructor() {
    this.dataStore = [];

  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    // 普通队列
    return this.dataStore.shift();

    // 优先队列

  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    return this.dataStore.toString();
  }

  empty() {
    return this.dataStore.length === 0;
  }

  count() {
    return this.dataStore.length;
  }
}

module.exports = Queue;