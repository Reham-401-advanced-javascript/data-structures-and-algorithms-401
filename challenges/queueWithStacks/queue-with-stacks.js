'use strict';

const Stack = require('../stacksAndQueues/stacksAndQueue.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    if (value) {
      this.stack1.push(value);
      return this.stack1.top;
    } else {
      return null;
    }
  }
  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return null;
      }
      while (this.stack1.length > 0) {
        let popValue = this.stack1.pop();
        this.stack2.push(popValue);
      }
    }
    return this.stack2.pop();
  }
}


module.exports = PseudoQueue;