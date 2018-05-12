/*
* 双向链表
* */
class DeLinkedList {
  constructor() {
    this.headElement = 'head';
    this.head = new Node(this.headElement);

    this._cursor = this.head;
  }

  /*
  * 找到已知节点
  * */
  find(item) {
    let curNode = this.head;
    while (curNode.element !== item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);

    // 如果当前元素的 next 指向 null
    if (current.next === null) {
      newNode.previous = current;
      current.next = newNode;
      return;
    }

    // 如果当前元素的 next 不为 null
    current.next.previous = newNode;

    newNode.next = current.next;
    newNode.previous = current;

    current.next = newNode;
  }

  // remove 方法不用找 previousNode
  remove(item) {
    const curNode = this.find(item);
    if (curNode.next !== null) {
      curNode.previous.next = curNode.next;
      curNode.next.previous = curNode.previous;

      curNode.next = null;
      curNode.previous = null;
    } else {
      // 如果 curNode.next 为 null
      curNode.previous.next = null;

      curNode.next = null;
      curNode.previous = null;
    }
  }

  display() {
    let curNode = this.head;
    const arr = [];
    while (!(curNode.next === null)) {
      // 不 push head 了
      arr.push(curNode.next.element);
      curNode = curNode.next;
    }
    return arr;
  }

  // 找到最后一个节点
  findLast() {
    let curNode = this.head;
    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    return curNode;
  }

  // 反序展示链表元素
  displayReverse() {
    let curNode = this.findLast();
    const arr = [];
    while (!(curNode.previous === null)) {
      // 不 push head 了, 注意这里没有 .previous
      arr.push(curNode.element);
      curNode = curNode.previous;
    }
    return arr;
  }

  /*
  * 使当前节点向前移动 n 个节点
  * */
  advance(n) {
    while (n-- > 0 && this._cursor.next !== null) {
      this._cursor = this._cursor.next;
    }
  }

  /*
  * 展示当前节点上的数据
  * */
  show() {
    return this._cursor.element;
  }

  /*
  * 使当前节点向后移动 n 个节点
  * */
  back(n) {
    while (n-- > 0 && this._cursor.previous !== null) {
      this._cursor = this._cursor.previous;
    }
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

module.exports = DeLinkedList;