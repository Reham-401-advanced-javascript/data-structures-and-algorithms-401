'use strict';
const Node=require('../ll-merge/node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert (value){
   
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }
  merge(L1,L2){
    let arr1=[];
    let arr2=[];

    let current1=L1.head;
    let current2=L2.head;
    
    console.log('11111111',current1);
    console.log('2222222',current2);
    if(current1.value !== null && current2.value !== null){
      while(current1){
        arr1.push(current1.value);
        current1=current1.next;
      }
      while(current2){
        arr2.push(current2.value);
        current2=current2.next;
      }

      // console.log('11111111',arr1);
      // console.log('2222222',arr2);
    }else{
      console.log('faaaaaaaaaaaaaaaaaaaaalse');
    }
    let j;
    if (arr1.length<arr2.length){
      j=arr2.length;
    //  return j;
    }
    else{
      j=arr1.length;
    //  return j;
    }
    console.log('jjjjj',j);
    let mergearr=[];
    for (let i=0;i<j;i++){
      mergearr.push(arr1[i]);
      mergearr.push(arr2[i]);

    }
    let maximum=new LinkedList;
    for (let i=0;i<j;i++){
      maximum.insert(arr1[i]);
      maximum.insert(arr2[i]);
      return maximum;
    }
  }


}


module.exports = LinkedList;
const ll = new LinkedList();
const ll2 = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(90);

ll2.insert(40);
ll2.insert(50);
ll2.insert(60);
// ll.append(40);
// ll.append(60);
// ll.insertBefore(20, 50);
// ll.insertAfter(40, 60);
// ll.insertAfter(20, 70);
// ll.valOfK(0);
const l1=ll;
const l2=ll2;
console.log('llllkkkkkkkkkk : ', ll);
console.log('llllkkkkkkkkkk : ', ll2);

// console.log('llrrrrrrrrrr : ', ll.valOfK(1));

// ll.printNodesOut();
// module.exports = LinkedList;
console.log('meeerge',ll.merge(l1,l2));