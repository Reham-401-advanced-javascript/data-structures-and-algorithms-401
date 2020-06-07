'use strict';

const stacksAndQueue = require('../stacksAndQueue.js');

describe('Stack', () => {
  it('creates an instance', () => {
    const stack = new stacksAndQueue.Stack();
    expect(stack instanceof stacksAndQueue.Stack).toBeTruthy();
  });

  describe('peek()', () => {
    it('returns null on empty stack', () => {
      const stack = new stacksAndQueue.Stack();
      expect(stack.peek()).toBeNull();
    });
    it('returns the last item', () => {
      const stack = new stacksAndQueue.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('does not alter the stack', () => {
      const stack = new stacksAndQueue.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });
    it('points to the new head after pop()', () => {
      const stack = new stacksAndQueue.Stack();
      stack.push(2);
      stack.push(1);
      stack.push(4);
      stack.push(6);
      stack.pop();
      expect(stack.peek()).toEqual(4);
      stack.pop();
      expect(stack.peek()).toEqual(1);
    });
  });
  describe('push()', () => {
    it('adds a value to the top of the stack', () => {
      const stack = new stacksAndQueue.Stack();
      stack.push(1);
      expect(stack.top).toEqual(1);
      stack.push(2);
      expect(stack.top).toEqual(2);
    });
  });
  describe('pop()', () => {
    it('returns and remove the top item', () => {
      const stack = new stacksAndQueue.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.top).toEqual(null);
    });
  });
});
describe('isEmpty for stack()', () => {
  it('returns a true if the stack is empty', () => {
    const stack = new stacksAndQueue.Stack();
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.peek()).toBeNull();

  
  });
  it('returns a false if the stack is not empty', () => {
    const stack = new stacksAndQueue.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toEqual(3);

  
  });

});

describe('Queue', () => {
  it('do FIFO', () => {
    const q = new stacksAndQueue.Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);
  });
});

describe('isEmpty for queue()', () => {
  it('returns a true if the queue is empty', () => {
    const queue = new stacksAndQueue.Queue();
    expect(queue.isEmpty()).toEqual(true);
  
  });
  it('returns a false if the queue is not empty', () => {
    const queue = new stacksAndQueue.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(1);
 
  });

});