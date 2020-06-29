'use strict';

function InsertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr=[5,6,88,4,-1,5];
let r=InsertionSort(arr);
console.log(r);

module.exports=InsertionSort;