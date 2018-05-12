/*
* 循环链表
* 与单向链表操作类似
* */
class LoopLinkedList {
  constructor() {
    this.headElement = 'head';
    this.head = new Node(this.headElement);

    this.head.next = this.head;

    // 是否包含第一个 head, 在 display 或者 length 中
    this._containHead = false;
  }

  setContainHead(bool) {
    this._containHead = bool;
  }

  /*
  * 找到已知节点
  * 在循环链表中, 如果 find 不到 item, 如果没有进行next是否为head判断, 会无限循环
  * */
  find(item) {
    let curNode = this.head;
    while (curNode.element !== item && curNode.next !== this.head) {
      curNode = curNode.next;
    }
    return curNode;
  }

  /*
  * 找到已知节点的前驱节点
  * */
  findPrevious(item) {
    let curNode = this.head;
    while (curNode.next.element !== item && curNode.next !== this.head) {
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
  * */
  remove(item) {
    // 如果没有传入 item, 则 remove 当前 item
    item = item || this.head.element;
    const prevNode = this.findPrevious(item);
    const curNode = this.find(item);

    prevNode.next = curNode.next;

    // 如果删除了当前节点, 要把 head 指向下一个节点
    if (item === this.head.element) {
      this.head = curNode.next;
    }

    curNode.next = null;
  }

  display() {
    let curNode = this.head;
    const arr = [];

    if (this._containHead) {
      arr.push(curNode.element);
    }

    // 这里不会把 head 算进去
    while (curNode.next.element !== this.head.element) {
      // 不 push head 了
      arr.push(curNode.next.element);
      curNode = curNode.next;
    }
    return arr;
  }

  /*
 * 使当前节点向前移动 n 个节点, 循环链表, 不用判断 null
 * */
  advance(n) {
    while (n-- > 0) {
      this.head = this.head.next;
    }
  }

  /*
  * 展示当前节点上的数据
  * */
  show() {
    return this.head.element;
  }

  /*
  * 设置 head 内 element 为 item
  * */
  setHeadElement(item) {
    this.head.element = item;
    this.headElement = item;
  }

  /*
  * 返回链表长度, 包括 head
  * */
  length() {
    return this.display().length;
  }
}


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
module.exports = LoopLinkedList;