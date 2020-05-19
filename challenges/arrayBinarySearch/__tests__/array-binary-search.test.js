
const arrBinarySearch = require('.././array-binary-search');


describe('array binary search', () => {

  it('return the index of the array’s element that is equal to the search key ', () => {
    expect(arrBinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });

  it('return -1 if the array’s element not equal to the search key ', () => {
    expect(arrBinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });



});