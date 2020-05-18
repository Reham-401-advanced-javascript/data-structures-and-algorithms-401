
const insertShiftArray = require('.././array-shift.js');


describe('insert new value', ()=>{

  it('insert the new value  in the middle of array',()=>{
    expect(insertShiftArray.insertShiftArray([1,2,3,5,6,7],4)).toStrictEqual([ 1,2,3,4,5,6,7]);
  });
  
});