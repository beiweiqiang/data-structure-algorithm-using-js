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

}

module.exports = CArray;