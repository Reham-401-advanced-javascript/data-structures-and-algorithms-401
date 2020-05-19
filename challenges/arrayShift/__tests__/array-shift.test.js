
const ShiftArray = require('.././array-shift.js');


describe('insert to Array', () => {

  it('insert the new value  in the middle of array', () => {
    expect(ShiftArray([1, 9, 3, 8], 4)).toStrictEqual([1, 9, 4, 3, 8]);
  });

});