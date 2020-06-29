'use strict';
function Mergesort(arr){
  let result;
  let n = arr.length;
  if(n > 1){
    let mid = n/2;
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,n);
    // sort the left side
    Mergesort(left);
    // sort the right side
    Mergesort(right);
    // merge the sorted left and right sides together
    result=Merge(left, right, arr);  
  }
  return result;
}

function Merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){

    if (left[i] <= right[j]){
      arr[k] = left[i];
      i = i + 1;
    }else{
      arr[k] = right[j];
      j = j + 1;
            
    }
    k = k + 1;
  }
  if (i === left.length){

    while(j < right.length){
      arr[k] = right[j];
      k++;
      j++; 
    }
  }else{
    while(i < left.length){
      arr[k] = left[i];
      k++;
      i++;
    }
  }
  return arr;
}
module.exports = Mergesort;

let arr=[8,4,23,42,16,15];
let r = Mergesort(arr);
console.log('fffff',r);