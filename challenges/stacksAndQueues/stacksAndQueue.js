'use strict';
const stackAndQueue={};
class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }
  peek() {
    return this.top;
  }
  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }
  pop() {
    const item = this.storage.shift();
    this.top = this.storage[0] ? this.storage[0] : null;
    return item;
  }
  isEmpty(){
    return this.storage.length===0;
  }
}

class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
    //this.storage.unshift(item)
  }
  dequeue() {
    return this.storage.shift();
    // return this.storage.pop()
  }

  peek() {
    return this.storage[0];
  }
  isEmpty(){
    return this.storage.length===0;
  }
}

stackAndQueue.Stack=Stack;
stackAndQueue.Queue=Queue;
/*
let stack=new stackAndQueue.Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();


console.log(stack);
console.log('is empty',stack.isEmpty());
console.log('peek',stack.peek());
console.log('----------------------');

let queue=new stackAndQueue.Queue();
queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(7);

console.log(queue);
console.log('is empty',queue.isEmpty());
console.log('peek',queue.peek());*/

module.exports = stackAndQueue;