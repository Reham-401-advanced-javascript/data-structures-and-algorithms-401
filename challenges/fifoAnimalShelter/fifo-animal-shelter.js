'use strict';
class AnimalShelter {
  constructor() {
    this.storage=[];
  }
  enqueue(animal) {
   
    if(animal){
      if(animal.type === 'dog' || animal.type === 'cat'){
        this.storage.push(animal);
      }else{
        return null;
      }
       
    }}
  dequeue(pref){
    if(pref){
      while(this.storage.length != 0){
        
        if(this.peek().name === pref.name && this.peek().type === pref.type){
          return this.peek();
        }else{
          this.storage.shift();
        }
      }
      return null;
    }
  }
  peek(){
    return this.storage[0];
  }
}

// class Queue {
//   constructor() {
//     this.storage = [];
//   }
//   enqueue(item) {
//     this.storage.push(item);
//     //this.storage.unshift(item)
//   }
//   dequeue() {
//     return this.storage.shift();
//     // return this.storage.pop()
//   }

//   peek() {
//     return this.storage[0];
//   }
//   
// }

module.exports = AnimalShelter;
let shelter=new AnimalShelter();
shelter.enqueue({type : 'cat' , name : 'caty'});
shelter.enqueue({type : 'dog' , name : 'loly'});
shelter.enqueue({type : 'dog' , name : 'black'});
shelter.dequeue({type : 'dog' , name : 'loly'});




console.log('ffff',shelter);
