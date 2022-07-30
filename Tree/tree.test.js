const Node = require('./Node');
const Tree = require('./Tree');

describe("test Node class", () => {
  it("should create a new node", () => {
    const node = new Node(1);
    expect(node.getData()).toBe(1);
    expect(node.getLeft()).toBe(null);
    expect(node.getRight()).toBe(null);
  })
})

describe("test Tree class", () => {
  it("new trees should have null roots", () => {
    const tree = new Tree();
    expect(tree.root).toBe(null);
  })
  describe("tree insertion", () => {
    it("should insert a node", () => {
      const tree = new Tree();
      tree.insert(1);
      expect(tree.root.getData()).toBe(1);
      expect(tree.root.getLeft()).toBe(null);
      expect(tree.root.getRight()).toBe(null);
      expect(tree.getSize()).toBe(1);
    })
    it("should insert a node greater than root on right", () => {
      const tree = new Tree();
      tree.insert(1);
      tree.insert(2);
      expect(tree.root.getData()).toBe(1);
      expect(tree.root.getRight().getData()).toBe(2);
      expect(tree.root.getLeft()).toBe(null);
      expect(tree.getSize()).toBe(2);
    })
    it("should insert a node less than root on left", () => {
      const tree = new Tree();
      tree.insert(1);
      tree.insert(0);
      expect(tree.root.getData()).toBe(1);
      expect(tree.root.getLeft().getData()).toBe(0);
      expect(tree.root.getRight()).toBe(null);
      expect(tree.getSize()).toBe(2);
    })
    it("should insert all 10 values", () => {
      const tree = new Tree();
      for (let i = 0; i < 10; i++) {
        tree.insert(i);
      }
      expect(tree.getSize()).toBe(10);
      expect(tree.root.getLeft()).toBe(null);
      expect(tree.root.getRight().getData()).toBe(1);

      tree.clear();

      for (let i = 10; i > 0; i--) {
        tree.insert(i);
      }
      expect(tree.getSize()).toBe(10);
      expect(tree.root.getRight()).toBe(null);
      expect(tree.root.getLeft().getData()).toBe(9);
    })
  })
  describe("tree clear function", () => {
    it("should clear a tree", () => {
      const tree = new Tree();
      for (let i = 0; i < 10; i++) {
        tree.insert(i);
      }
      expect(tree.getSize()).toBe(10);
      tree.clear();
      expect(tree.getSize()).toBe(0);
      expect(tree.root).toBe(null);
    })
  })
  describe("tree print functions", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
      jest.clearAllMocks()
    })

    const TREE_VALUES = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];
    const TREE_IN_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const TREE_PRE_ORDER = [8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15];
    const TREE_POST_ORDER = [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8];

    it("should print a tree in order", () => {
      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.printInOrder();
      expect(consoleSpy).toHaveBeenCalledTimes(TREE_IN_ORDER.length);
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })
    it("should print a tree pre order", () => {
      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.printPreOrder();
      expect(consoleSpy).toHaveBeenCalledTimes(TREE_PRE_ORDER.length);
      TREE_PRE_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })
    it("should print a tree post order", () => {
      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.printPostOrder();
      expect(consoleSpy).toHaveBeenCalledTimes(TREE_POST_ORDER.length);
      TREE_POST_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })
  })
  describe("tree find function", () => {
    it("should find a node", () => {
      const tree = new Tree();
      tree.insert(1);
      tree.insert(2);
      tree.insert(3);
      expect(tree.find(1).getData()).toBe(1);
      expect(tree.find(2).getData()).toBe(2);
      expect(tree.find(3).getData()).toBe(3);
      expect(tree.find(4)).toBe(null);

      tree.clear();

      tree.insert(3);
      tree.insert(2);
      tree.insert(1);
      expect(tree.find(1).getData()).toBe(1);
      expect(tree.find(2).getData()).toBe(2);
      expect(tree.find(3).getData()).toBe(3);
      expect(tree.find(4)).toBe(null);
    })
    it("should return null if tree is empty", () => {
      const tree = new Tree();
      expect(tree.find(1)).toBe(null);
    })
  })
  describe("tree delete function", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
      jest.clearAllMocks()
    })

    const TREE_VALUES = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

    it("should return null if tree is empty", () => {
      const tree = new Tree();
      expect(tree.delete(1)).toBe(null);
    })
    it("should delete a node on the bottom left", () => {
      const TREE_IN_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.delete(1)
      expect(tree.getSize()).toBe(14);
      expect(tree.find(1)).toBe(null);
      tree.printInOrder()
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })

    it("should delete a node on the bottom right", () => {
      const TREE_IN_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.delete(15)
      expect(tree.getSize()).toBe(14);
      expect(tree.find(15)).toBe(null);
      tree.printInOrder()
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })

    it("should delete the root node and reorganize tree", () => {
      const TREE_IN_ORDER = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15];

      const tree = new Tree();
      TREE_VALUES.forEach(value => tree.insert(value))
      tree.delete(8)
      expect(tree.getSize()).toBe(14);
      expect(tree.find(8)).toBe(null);
      tree.printInOrder()
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })

    it("should delete a node on a not fully balanced tree", () => {
      let TREE_IN_ORDER = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      const tree = new Tree();
      TREE_VALUES.filter(node => node !== 1).forEach(value => tree.insert(value))
      tree.delete(2)
      expect(tree.getSize()).toBe(13);
      expect(tree.find(2)).toBe(null);
      tree.printInOrder()
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));

      jest.clearAllMocks();
      tree.clear();
      TREE_IN_ORDER = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      TREE_VALUES.filter(node => node !== 3).forEach(value => tree.insert(value))
      tree.delete(2)
      expect(tree.getSize()).toBe(13);
      expect(tree.find(2)).toBe(null);
      tree.printInOrder()
      TREE_IN_ORDER.forEach((value, index) => expect(consoleSpy.mock.calls[index][0]).toBe(value));
    })
  })
})