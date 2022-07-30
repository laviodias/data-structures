const Node = require('./Node');

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  delete(data) {
    if (this.root === null) {
      return null;
    } else {
      this.root = this.deleteNode(this.root, data);
    }
  }

  deleteNode(node, data) {
    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const temp = this.smallestNodeInSubtree(node.right);

        node.data = temp.data;
        node.right = this.deleteNode(node.right, temp.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else {
      node.right = this.deleteNode(node.right, data);
      return node;
    }
  }

  smallestNodeInSubtree(node) {
    if (node.left === null) {
      return node;
    }
    return this.smallestNodeInSubtree(node.left);
  }

  printPreOrder() {
    this.printNodePreOrder(this.root);
  }

  printInOrder() {
    this.printNodeInOrder(this.root);
  }

  printPostOrder() {
    this.printNodePostOrder(this.root);
  }

  printNodePreOrder(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    this.printNodePreOrder(node.left);
    this.printNodePreOrder(node.right);
  }

  printNodeInOrder(node) {
    if (node === null) {
      return;
    }
    this.printNodeInOrder(node.left);
    console.log(node.data);
    this.printNodeInOrder(node.right);
  }

  printNodePostOrder(node) {
    if (node === null) {
      return;
    }
    this.printNodePostOrder(node.left);
    this.printNodePostOrder(node.right);
    console.log(node.data);
  }

  find(data) {
    if (this.root === null) {
      return null;
    } else {
      return this.findNode(this.root, data);
    }
  }

  findNode(root, data) {
    if (root.data === data) {
      return root;
    } else if (data < root.data && root.left !== null) {
      return this.findNode(root.left, data);
    } else if (data > root.data && root.right !== null) {
      return this.findNode(root.right, data);
    } else {
      return null;
    }
  }

  getSize() {
    return this.getSizeNode(this.root);
  }

  getSizeNode(root) {
    if (root === null) {
      return 0;
    }
    return this.getSizeNode(root.left) + 1 + this.getSizeNode(root.right);
  }

  clear() {
    this.root = null;
  }
}

module.exports = Tree;