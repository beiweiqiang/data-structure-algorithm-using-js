class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let curNode = this.root;
      /*
      * NOTE: 这里为什么要引入 parentNode ?
      * 答: 用 parentNode 来维护一个父节点引用
      * */
      let parentNode;
      /*
      * 算法:
      * 设当前节点为父节点, 如果要插入的 data 小于当前节点的值, 当前节点移动到父节点的 left 节点,
      * 如果 left 节点为 null, 将 data 赋给该 left 节点.
      * */
      while (true) {
        parentNode = curNode;
        if (data < curNode.data) {
          curNode = curNode.left;
          if (curNode === null) {
            parentNode.left = node;
            break;
          }
        } else {
          curNode = curNode.right;
          if (curNode === null) {
            parentNode.right = node;
            break;
          }
        }
      }
    }
  }

  /*
  * 中序遍历, root 节点中间输出
  * */
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      /*
      * 打印 node.show() 必须放在中间, 因为是中序遍历
      * 三种不同方式遍历只是这一句放的位置不同
      * */
      console.log('bst.js: 38 -> inOrder -> ', node.show());
      this.inOrder(node.right);
    }
  }

  /*
  * 先序遍历, root 节点先输出
  * */
  preOrder(node) {
    if (node !== null) {
      console.log('bst.js: 38 -> inOrder -> ', node.show());
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }

  show() {
    return this.root.data;
  }

  /*
  * 查找最小值 / 最大值
  * */
  getMin(node) {
    let curNode = node || this.root;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    return curNode.data;
  }
  getMax(node) {
    let curNode = node || this.root;
    while (curNode.right !== null) {
      curNode = curNode.right;
    }
    return curNode.data;
  }


  /*
  * 查找给定值
  * */
  find(data) {
    let curNode = this.root;
    while (curNode !== null) {
      if (curNode.data === data) {
        return curNode;
      }
      if (data < curNode.data) {
        curNode = curNode.left;
      }
      if (data > curNode.data) {
        curNode = curNode.right;
      }
    }
    return null;
  }

  /*
  * 删除指定的一个值
  * */
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      // 如果没有子节点
      if (node.left === null && node.right === null) {
        return null;
      }

      /*
      * 如果待删除的节点只有一个子节点, 将父节点对待删除节点的引用, 用来引用子节点
      * */
      // 如果只有左子节点
      if (node.right === null) {
        return node.left;
      }

      // 如果只有右子节点
      if (node.left === null) {
        return node.right;
      }

      // 如果有两个子节点
      /*
      * 有两种删除方式:
      * 1 找到左子树上的最大值, 将待删除的节点的 data 换成该最大值, 然后删除左子树上的最大值的那个节点
      * 2 找到右子树上的最小值, 将待删除的节点的 data 换成该最小值, 然后删除右子树上的最小值的那个节点
      *
      * NOTE: 这里并不是说要把整棵子树删去!!!! 只是要把这个值删去而已!!!!
      *
      * 这里我们采取第 2 种
      * */
      const tmpNode = this.getMin(node.right);
      node.data = tmpNode.data;
      node.right = this.removeNode(node.right, tmpNode.data);
      return node;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

module.exports = BST;