class Node {
  constructor(data) {
    if(data === null || data === undefined){
      throw new Error("Data is required");
    }
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