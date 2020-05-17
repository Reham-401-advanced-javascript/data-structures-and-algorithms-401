'use strict';

let arr=[1,5,7,9];
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

 reverseArray(arr);
 
