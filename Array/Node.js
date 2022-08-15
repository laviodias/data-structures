class Node {
  constructor(data) {
    if(data === null || data === undefined) {
      throw new Error("Data is required");
    }
    this.data = data;
    this.previous = null;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.previous;
  }
}

module.exports = Node;