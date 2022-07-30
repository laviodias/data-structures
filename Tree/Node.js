class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }
}

module.exports = Node;