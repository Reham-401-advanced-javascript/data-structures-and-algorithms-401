'use strict';

let Hasmap = require('../repeated-word/repeatedWord.js');
function tree_intersection(tree1, tree2){
  let array = [];
  const _traversal = node =>{
    if (node.value) array.push(node.value);
    if (node.left) _traversal(node.left);
    if (node.right) _traversal(node.right);
  };
  _traversal(tree1.root);
  _traversal(tree2.root);

  let hashMap = new Hasmap(4000);

  for (let i = 0; i < array.length; i++) {
    hashMap.set(`${array[i]}`,array[i]);
  }
  let result = [];
  for (let i = 0; i < hashMap.storage.length; i++) {
      
    if ( hashMap.storage[i] &&  hashMap.storage[i].head.next){
    //   console.log('----------------------------------------------',hashMap.storage[i].head);
      result.push( hashMap.storage[i].head.value);
    }
  } 
  return result;
}
module.exports = tree_intersection;
