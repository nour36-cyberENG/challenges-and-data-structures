const MinStack = require('./MinStack');

const minStack = new MinStack();

// Push elements
minStack.push(15); // Top -> 15 (min: 15)
minStack.push(7);  // Top -> 7 -> 15 (min: 7)
minStack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
minStack.push(3);  // Top -> 3 -> 12 -> 7 -> 15 (min: 3)

console.log('After pushes:', minStack.printStack());
console.log('getMin:', minStack.getMin());

// Pop a node
let popped = minStack.pop(); // popped: 3
console.log('popped :', popped);
console.log('After pop:', minStack.printStack());
console.log('getMin :', minStack.getMin());

// Peek top
console.log('top :', minStack.top());

// Push another element
minStack.push(2);
console.log('After push 2:', minStack.printStack());
console.log('getMin :', minStack.getMin());

// isEmpty
console.log('isEmpty:', minStack.isEmpty());
