const Queue = require('./Queue');

describe("verifying all queue methods", () => {
    test("enqueuing a node into the queue", () => {
        const queue = new Queue();
        
        queue.Enqueue(10);
        expect(queue.peek()).toBe(10);
        
        queue.Enqueue(20);
        expect(queue.peek()).toBe(10);
        
        queue.Enqueue(30);
        expect(queue.peek()).toBe(10);
    });

    test("dequeuing a node from the queue", () => {
        const queue = new Queue();
        
        queue.Enqueue(10);
        queue.Enqueue(20);
        queue.Enqueue(30);
        
        expect(queue.Dequeue()).toBe(10);
        expect(queue.Dequeue()).toBe(20);
        expect(queue.Dequeue()).toBe(30);
    });

    test("dequeue should return message on empty queue", () => {
        const queue = new Queue();
        
        expect(queue.Dequeue()).toBe("there no items on the queue");
    });

    test("peek should return front node without removing", () => {
        const queue = new Queue();
        
        queue.Enqueue(10);
        queue.Enqueue(20);
        
        expect(queue.peek()).toBe(10);
        expect(queue.peek()).toBe(10);
    });

    test("peek should return message on empty queue", () => {
        const queue = new Queue();
        
        expect(queue.peek()).toBe("there no items on the queue");
    });

    test("checking if the queue is empty", () => {
        const queue = new Queue();
        
        expect(queue.isEmpty()).toBe(true);
        
        queue.Enqueue(10);
        expect(queue.isEmpty()).toBe(false);
        
        queue.Dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

});