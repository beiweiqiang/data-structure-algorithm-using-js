class Deque {
  constructor() {
    this.dataStore = [];
  }

  frontEnqueue(element) {
    this.dataStore.unshift(element);
  }

  endEnqueue(element) {
    this.dataStore.push(element);
  }

  frontDequeue() {
    return this.dataStore.shift();
  }

  endDequeue() {
    return this.dataStore.pop();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  empty() {
    return this.dataStore.length === 0;
  }

  count() {
    return this.dataStore.length;
  }

  toString() {
    return this.dataStore.toString();
  }

}

module.exports = Deque;