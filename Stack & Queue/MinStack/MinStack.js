const Node = require('./Node');

class MinStack {
  constructor() {
    this.head = null; 
  }

  // push(value): Add an element to the top of the stack.
  push(value) {
    const newNode = new Node(value);
    // store current minimum at the node for O(1) getMin
    newNode.min = this.head ? Math.min(value, this.head.min) : value;
    newNode.next = this.head;
    this.head = newNode;
  }

  // pop(): Remove and return the top element from the stack.
  pop() {
    if (!this.head) return null;
    const removed = this.head.value;
    this.head = this.head.next;
    return removed;
  }

  // top(): Return the top element without removing it.
  top() {
    return this.head ? this.head.value : null; 
  }

  // getMin(): Return the minimum element in the stack.
  getMin() {
    return this.head ? this.head.min : null;
  }

  // printStack(): Print the contents of the stack (Top -> ...).
  printStack() {
    if (!this.head) return 'Top -> (empty)';
    const parts = [];
    let curr = this.head;
    while (curr) {
      parts.push(String(curr.value));
      curr = curr.next;
    }
    return 'Top -> ' + parts.join(' -> ');
  }

  // isEmpty(): true if the stack is empty.
  isEmpty() {
    return this.head === null;
  }
}

module.exports = MinStack;