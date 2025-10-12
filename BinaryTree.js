const TNode = require("./TNode");

class BinaryTree {
  constructor(root) {
    this.root = new TNode(root);
  }

  // ( Root - Left - Right )
  preOrderTraversal(node) {
    if (node === null) return;
    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  // ( Left - Root - Right )
  inOrderTraversal(node) {
    if (node === null) return;
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  // ( Left - Right - Root )
  postOrderTraversal(node) {
    if (node === null) return;
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.value);
  }

  // Add insert method to match your test
  insert(value) {
    // For BinaryTree, we'll just add to the first available spot
    this._insertHelper(this.root, value);
  }

  _insertHelper(node, value) {
    if (node.left === null) {
      node.left = new TNode(value);
    } else if (node.right === null) {
      node.right = new TNode(value);
    } else {
      // If both children exist, try inserting in left subtree
      this._insertHelper(node.left, value);
    }
  }

  // Add contains method
  contains(value) {
    return this._containsHelper(this.root, value);
  }

  _containsHelper(node, value) {
    if (node === null) return false;
    if (node.value === value) return true;
    return this._containsHelper(node.left, value) || this._containsHelper(node.right, value);
  }

  // Add remove method for BinaryTree
  remove(value) {
    this.root = this._removeHelper(this.root, value);
  }

  _removeHelper(node, value) {
    if (node === null) return null;
    
    if (node.value === value) {
      return null; // Simple removal for basic BinaryTree
    }
    
    node.left = this._removeHelper(node.left, value);
    node.right = this._removeHelper(node.right, value);
    return node;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Add insert method to match your test
  insert(value) {
    this.add(value);
  }

  contains(value) {
    let current = this.root; // Fixed: removed dot after let
    
    while (current) {
      if (value === current.value) return true;
      
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) return null;

    // Step 1: Find the node
    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    }

    // Step 2: Found the node to remove
    // Case 1: No children
    if (!node.left && !node.right) return null;

    // Case 2: One child
    if (!node.left) return node.right;
    if (!node.right) return node.left;

    // Case 3: Two children
    let minNode = this._findMin(node.right);
    node.value = minNode.value;
    node.right = this._removeNode(node.right, minNode.value);
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  // Add traversal methods for testing
  inOrderTraversal(node) {
    if (node === null) return;
    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }
}

module.exports = { BinaryTree, BinarySearchTree };