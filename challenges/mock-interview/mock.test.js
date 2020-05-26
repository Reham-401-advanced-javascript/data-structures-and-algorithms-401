'use strict';
let Sum = require('../mock-interview/mock.js');

describe('matrix sum ', () => {
  it('summation of all index in each inner array()  ', () => {

    // let arr=[[1,-5,3],[6,4,8,9]];
    expect(Sum.InnerArraysSum([[1, -5, 3], [6, 4, 8, 9]])).toEqual([-1, 27]);
    expect((Sum.InnerArraysSum([[1, -5, 3], [6, 4, 8, 9]])).length).toEqual(2);

    expect(Sum.InnerArraysSum([[1, -2, 3], [6, 4, 9], [1, 51, 0]])).toEqual([2, 19, 52]);
    expect((Sum.InnerArraysSum([[1, -2, 3], [6, 4, 9], [1, 51, 0]])).length).toEqual(3);
    let array = [];
    for (let i = 0; i < 1000; i++) {

      let inner = [1, 2, 3];
      array.push(inner);
    }
    expect((Sum.InnerArraysSum(array)).length).toEqual(1000);

  });
 
});

describe('  test fibonacci()' ,()=>{
  it('give me the  fibonacci number when i enter aspecific number', ()=>{
  
    let value = 10;
    expect(Sum.fibonacci(value)).toEqual(55);
  
  } );

});
 
describe('  test secondfibonacci()' ,()=>{
  it('give me the  fibonacci number when i enter aspecific number', ()=>{
    
    let value = 14;
    expect(Sum.secondfibonacci(value)).toEqual(377);
    
  } );
});
