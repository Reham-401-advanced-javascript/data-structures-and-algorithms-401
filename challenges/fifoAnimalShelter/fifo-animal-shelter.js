'use strict';
'use strict';

class AnimalShelter {
  constructor() {
    this.storage = [];
    this.front = null;
  }
  enqueue(animal) {
    if ((animal === 'dog') || (animal === 'cat')) {
      this.storage.push(animal);
      this.front = this.storage[0];
    }
    else {
      return null;
    }
  }
  dequeue(pref) {
    let counter = 0;
    if ((pref === 'dog') || (pref === 'cat')) {
      let newAnimal = [];
      for (let i = 0; i < this.storage.length; i++) {
        newAnimal.push(this.storage[i]);
        if ((this.storage[i] === pref) && (counter === 0)) {
          newAnimal.pop();
          counter++;
        }
      }
      this.storage = newAnimal;
      this.front = this.storage[0];
      return  pref;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
// let shelter = new AnimalShelter();
// shelter.enqueue('cat');
// shelter.enqueue('dog');
// shelter.enqueue('dog');
// shelter.enqueue('dg');

// shelter.dequeue('cat');

// console.log('ffff',shelter);





