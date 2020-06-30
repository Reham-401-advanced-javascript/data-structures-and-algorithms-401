'use strict';
function QuickSort(arr, left, right) {
  if (left < right) {
    // Partition the array by setting the position of the pivot value 
    let position = Partition(arr, left, right);
    // Sort the left
    QuickSort(arr, left, position - 1);
    // Sort the right
    QuickSort(arr, position + 1, right);
  }
  return arr;
}

function Partition(arr, left, right) {
  // set a pivot value as a point of reference
  let pivot = arr[right];
  // create a variable to track the largest index of numbers ier than the defined pivot
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      Swap(arr, j, i);
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right. 
  Swap(arr, right, i + 1);

  // return the pivot index point
  return i + 1;

}
function Swap(arr, j, i){
  let temp;
  temp =arr[j];
  arr[j] =arr[i];
  arr[i]=temp;

}

module.exports=QuickSort;
// let arr=[5,9,8,7,2,1];

// let r=QuickSort(arr,0,arr.length-1);
// console.log('dddd',r);