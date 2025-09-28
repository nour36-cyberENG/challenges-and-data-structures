const MinStack = require('./MinStack');

describe('MinStack - unit tests', () => {

  test('retrieving minimum after pushes', () => {
    const ms = new MinStack();
    ms.push(15);
    expect(ms.getMin()).toBe(15);

    ms.push(7);
    expect(ms.getMin()).toBe(7);

    ms.push(12);
    expect(ms.getMin()).toBe(7);

    ms.push(3);
    expect(ms.getMin()).toBe(3);
  });

  test('popping elements updates minimum correctly', () => {
    const ms = new MinStack();
    ms.push(15);
    ms.push(7);
    ms.push(12);
    ms.push(3);

    expect(ms.pop()).toBe(3);
    expect(ms.getMin()).toBe(7);

    expect(ms.pop()).toBe(12);
    expect(ms.getMin()).toBe(7);

    expect(ms.pop()).toBe(7);
    expect(ms.getMin()).toBe(15);
  });

  test('pushing elements updates minimum after pushes', () => {
    const ms = new MinStack();
    ms.push(10);
    ms.push(5);
    expect(ms.getMin()).toBe(5);

    ms.push(2);
    expect(ms.getMin()).toBe(2);
  });

  test('top, isEmpty and printStack behavior', () => {
    const ms = new MinStack();
    expect(ms.isEmpty()).toBe(true);

    ms.push(15);
    ms.push(7);
    expect(ms.top()).toBe(7);
    expect(ms.printStack()).toBe('Top -> 7 -> 15');

    ms.pop();
    ms.pop();
    expect(ms.isEmpty()).toBe(true);
  });

});
