'use strict';
class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal) {
    if (animal === 'dog' || animal === 'cat') {
      animal === 'dog' ? this.dog.push(animal) : this.cat.push(animal);
    } else {
      return null;
    }
  }
  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    } else {
      if (pref === 'dog') {
        this.dog.pop();
        return this.dog;
      }
  
      else {
        this.cat.pop();
        return this.cat;
        
      }
    }
  }
}
module.exports = AnimalShelter;
let shelter=new AnimalShelter();
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.enqueue('dog');
shelter.dequeue('dog');




console.log('ffff',shelter);
