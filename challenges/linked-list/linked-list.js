'use strict';
const Node=require('../linked-list/node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(val){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === val){
        return true;
      }else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }
  toSrting(){
    let currentNode = this.head;
    let stringList=[];
    while(currentNode){
      stringList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return stringList.join(' ');
  }
}
module.exports = LinkedList;