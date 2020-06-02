'use strict';

let mock=module.exports={};

// sum function
mock.InnerArraysSum =function(arr){
  let summation = [];
  for(let i = 0; i < arr.length;i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length;j++){
      sum += arr[i][j];
    }
    summation.push(sum);
  }
  return summation;
};

// fibonacci function
var fiboarr=[0,1];
mock.fibonacci=function(fibo){
  for (let index = 2; index <= fibo; index++) {
    fiboarr[index]=fiboarr[index-1]+fiboarr[index-2];
        
  }
  console.log(fiboarr[fibo]);
  return (fiboarr[fibo]);
};

mock.secondfibonacci=function(fibo){
  let goldenRatio = 1;
  let oneSubGoldenRatio = 1;
  for ( let i = 0; i < fibo; i++) {
    goldenRatio *= 1.61803399;
    oneSubGoldenRatio *= - 0.61803399;
  }
  return(Math.floor((goldenRatio - oneSubGoldenRatio) / 2.23606797400862));
};

