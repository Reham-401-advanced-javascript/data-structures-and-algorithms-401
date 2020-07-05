'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
 
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; // 2000
  }
  set(key, value) {
    // we need to get index in the storage (Array)
    const hash = this.hash(key);
    console.log('HASH', hash);
    // we need to check if there is already value at that index
    if (!this.storage[hash]) {
      // if there is no value create linkedlist
      const ll = new LinkedList();
      ll.add({ [key]: value });
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      // we already have a value at that index so just add to the front of the linkedList
      this.storage[hash].add({ [key]: value });
    }
  }
  get(key){
    // console.log('aaaaaaaaaaaaaaa',this.storage);

    const hash = this.hash(key);
    if(this.storage[hash]){
    //   console.log('zzzzzzzzzz',this.storage[hash].head);
      let current=this.storage[hash].head;
      do {
        if(current.value[key]){
          return current.value[key];
        }
        current=current.next;

      } while (current);

      return'not exist';
    }      
  }

  contain(key){
    const hash = this.hash(key);
    if(this.storage[hash]){
    //   console.log('zzzzzzzzzz',this.storage[hash].head);
      let current=this.storage[hash].head;
      console.log('heeead',current);
      do {
        // console.log('current',current.value,'gggggg',current.value[key]);

        if(current.value[key]){
        //   console.log('insiiiiiiiiiiiiiiiiide if current',current.value,'gggggg',current.value[key]);

          return true;
        }
        current=current.next;
      } while (current);

    }
    return false;

  }
  repeatedWord(str){
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase();
      if (arr[i].includes(',')) arr[i] = arr[i].slice(0, arr[i].length - 1);
      if (this.contain(arr[i])) {
        return arr[i];
      }
      
      this.set(arr[i],arr[i]);
    }
  }

}
  
const hashmap = new Hashmap(4000); // ==> [4000]
hashmap.set('name', 'mahmoud');
hashmap.set('one', 'thing');
hashmap.set('eno', '1');
hashmap.set('neo', '2');
hashmap.set('this', 'nothing');
let r= hashmap.get('oen');
let r2= hashmap.contain('oen');
let r8= hashmap.repeatedWord('Once upon a time, there was a brave princess who.');


console.log('rrrrrrrrrrrrrrrrrrrrr',r8);

console.log('geeeeeeeeeet',r);
console.log('contain',r2);

console.log(hashmap.storage);
console.log(
  'hi',
  hashmap.storage[3923].head.value['name'],
  hashmap.storage[2118].head.next
);