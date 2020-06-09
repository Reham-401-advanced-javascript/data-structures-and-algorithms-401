'use strict';
const Node=require('../linked-list/node.js');

class LinkedList{
  constructor(){
    this.head = null;
    this.size=0;
  }

  insert (value){
   
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
    this.size++;

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

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      console.log(' list after add new node ' , currentNode);

    }
    this.size++;
    return this;
  }


  insertBefore(value, newValue) {

    let currentNode, previousNode;

    // check if the list is empty or not , No head 
    if ( this.head === null) {
      this.head = new Node(newValue, this.head);
    }

    let newNode = new Node(newValue);
    currentNode = this.head;
    while (currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.size++;

  }

  insertAfter(value, newValue) {

    let currentNode, previousNode;

    if (this.head === null) {
      this.head = new Node(newValue, this.head);
    }

    let newNode = new Node(newValue);
    currentNode = this.head;
    while (currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    previousNode.next = currentNode;
    this.size++;
    
  } 
  valOfK(k){
    let currentNode=this.head;
    if (k>=this.size){
      return ('not exist');
    }else if (k<0){
      return('negative value');
    }else if(this.size>k) {
      for(let i = 0;i<this.size-k-1;i++){
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }


}

// const ll = new LinkedList();
// ll.insert(10);
// ll.insert(20);
// ll.insert(30);
// ll.append(40);
// ll.append(60);
// ll.insertBefore(20, 50);
// ll.insertAfter(40, 60);
// ll.insertAfter(20, 70);
// ll.valOfK(0);

// console.log('llllkkkkkkkkkk : ', ll);
// console.log('llrrrrrrrrrr : ', ll.valOfK(1));

module.exports = LinkedList;