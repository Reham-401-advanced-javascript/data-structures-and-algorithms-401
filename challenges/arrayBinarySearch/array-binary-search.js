'use strict';
let BinarySearch = function (arr, key) {
  let validation;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      validation=i;
      return (validation );
    }
  }
  if(!validation){
    return(-1);
  }
    
};

module.exports = BinarySearch;
