const Node = require('./Node');
const Array = require('./Array');

describe("Test Node class", () => {
  it("should create new node when data is provided", () => {
    const node = new Node(1);
    expect(node.getData()).toBe(1);
    expect(node.getPrevious()).toBe(null);
    expect(node.getNext()).toBe(null);
  })

  it("should throw error when data is not provided", () => {
    expect(() => {
      new Node();
    }).toThrowError("Data is required");
  })
})

describe("Test Array class", () => {
  beforeEach(() => {
    array = new Array();
  })
  it("should create new array", () => {
    expect(array.getLength()).toBe(0);
    expect(array.getHead()).toBe(null);
    expect(array.getTail()).toBe(null);
  })

  it("should push a node to the array", () => {
    array.push(1);
    expect(array.getLength()).toBe(1);
    expect(array.getHead().getData()).toBe(1);
    expect(array.getTail().getData()).toBe(1);
  })

  it("should pop a node from the array", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.pop();
    expect(array.getLength()).toBe(2);
    expect(array.getHead().getData()).toBe(1);
    expect(array.getTail().getData()).toBe(2);
  })

  it("should shift a node from the array", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.shift();
    expect(array.getLength()).toBe(2);
    expect(array.getHead().getData()).toBe(2);
    expect(array.getTail().getData()).toBe(3);
  })

  it("should delete a node from the array", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.delete(2);
    expect(array.getLength()).toBe(2);
    expect(array.getHead().getData()).toBe(1);
    expect(array.getTail().getData()).toBe(3);
    array.delete(1);
    expect(array.getLength()).toBe(1);
    expect(array.getHead().getData()).toBe(3);
    expect(array.getTail().getData()).toBe(3);
    array.delete(3);
    expect(array.getLength()).toBe(0);
    expect(array.getHead()).toBe(null);
    expect(array.getTail()).toBe(null);
  })

  it("should return false when node is not found", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.delete(4)).toBe(false);
  })

  it("should access the index and return the node value when exists", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.access(2)).toBe(3);
  })

  it("should return null when index is out of bound", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.access(4)).toBe(null);
  })

  it("should print the array", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const ARRAY_VALUES = [1, 2, 3, 4, 5];
    ARRAY_VALUES.forEach(value => {
      array.push(value);
    })
    array.print();
    expect(consoleSpy).toHaveBeenCalledTimes(ARRAY_VALUES.length);
    ARRAY_VALUES.forEach((value, index) => {
      expect(consoleSpy.mock.calls[index][0]).toBe(value);
    })
    consoleSpy.mockRestore();
  })

  it("should print the array in reverse", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const ARRAY_VALUES = [1, 2, 3, 4, 5];
    ARRAY_VALUES.forEach(value => {
      array.push(value);
    });
    array.print_reverse();
    expect(consoleSpy).toHaveBeenCalledTimes(ARRAY_VALUES.length);
    ARRAY_VALUES.reverse().forEach((value, index) => {
      expect(consoleSpy.mock.calls[index][0]).toBe(value);
    });
    consoleSpy.mockRestore();

  })
})