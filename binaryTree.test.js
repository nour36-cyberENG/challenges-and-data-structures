const TNode = require("./TNode");
const { BinarySearchTree } = require("./BinaryTree");

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree(); 
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
  });

  test('adding a node', () => {
    bst.add(3);
    const consoleSpy = jest.spyOn(console, 'log');
    bst.inOrderTraversal(bst.root);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    consoleSpy.mockRestore();
  });

  test('checking if a node exists', () => {
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });

  test('removing a node', () => {
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
  });

  test('removing a node with two children', () => {
    bst.add(12);
    bst.add(17);
    bst.remove(15);

    expect(bst.contains(15)).toBe(false);
    expect(bst.contains(17)).toBe(true);
    expect(bst.contains(12)).toBe(true);
  });
});