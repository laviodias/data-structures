const Node = require('./Node');

class Array {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  push(data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;
  }

  shift() {
    this.head = this.head.next;
    this.length--;
  }

  delete(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = current.previous;
        }
        if (current.previous) {
          current.previous.next = current.next;
        }
        if (current.next) {
          current.next.previous = current.previous;

        } this.length--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  access(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      if (current === null) {
        return null;
      }
      current = current.next;
      count++;
    }
    return current.getData();
  }
}

module.exports = Array;