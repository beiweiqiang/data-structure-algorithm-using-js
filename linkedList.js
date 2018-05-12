/*
* 单向链表
* */
class LinkedList {
  constructor() {
    this.headElement = 'head';
    // head 节点别动
    this.head = new Node(this.headElement);

    // 光标
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

  /*
  * 找到已知节点的前驱节点
  * */
  findPrevious(item) {
    let curNode = this.head;
    while ((curNode.next !== null) && (curNode.next.element !== item)) {
      curNode = curNode.next;
    }
    return curNode;
  }

  /*
  * 将新节点的 next 指向 原来已知节点的 next node
  * 将已知节点的 next 指向 新节点
  * */
  insert(newElement, item) {
    const newNode = new Node(newElement);
    // 找到已知节点
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  /*
  * 将 待删除节点 的 前驱的next 指向 待删除节点 的 后继
  * 如果 待删除节点的next为null, 则将 待删除节点 的 前驱 指向 null
  * */
  remove(item) {
    item = item || this._cursor.element;
    const prevNode = this.findPrevious(item);
    const curNode = this.find(item);
    if (curNode.next !== null) {
      prevNode.next = curNode.next;

      // 如果删除了当前节点, _cursor 指向 curNode.next
      if (item === this._cursor.element) {
        this._cursor = curNode.next;
      }
      curNode.next = null;

    } else {
      prevNode.next = null;

      // 如果删除了当前节点, head 指向 prevNode ? ( 有待商榷 )
      if (item === this._cursor.element) {
        this._cursor = prevNode;
      }
      curNode.next = null;
    }
  }

  /*
  * 展示当前链表上的所有元素
  *
  * @return {Array}
  * */
  display() {
    let curNode = this.head;
    const arr = [];

    while (curNode.next !== null) {
      // 不 push head 了
      arr.push(curNode.next.element);
      curNode = curNode.next;
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
}


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
module.exports = LinkedList;