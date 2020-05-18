'use strict';

let insertShiftArray = (arr, value) => {

  let shiftedArray = [];
  let midIndex = Math.floor(arr.length / 2);
  
  for (let i = 0; i <= arr.length; i++) {
    if (i < midIndex) {
      shiftedArray[i] = arr[i];
    }
    if (i === midIndex) {
      shiftedArray[i] = value;
    }
    if (i > midIndex) {
      shiftedArray[i] = arr[i - 1];
    }
     
  }
  return shiftedArray;
};
insertShiftArray ([1,2,3,5,6,7],4);

module.exports = insertShiftArray;