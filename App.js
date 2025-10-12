const { BinarySearchTree } = require("./BinaryTree");

const bst = new BinarySearchTree();

bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

console.log(bst.contains(7)); // true

bst.remove(5);
console.log(bst.contains(5)); // false