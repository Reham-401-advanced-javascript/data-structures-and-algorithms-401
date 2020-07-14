'use strict';
'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // Root -> Left -> Right
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Root -> Right
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  // Left -> Right -> Root
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
 
  add(value){
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this._addition(value, this.root);
  }
  _addition(value, node) {
    if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      } else {
        this._addition(value, node.right);
        return;
      }
    }
    if (value <= node.value) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      } else {
        this._addition(value, node.left);
        return;
      }
    }
  
  }
  contains(value){
    let node = this.root; 
    while(node){
      if( value === node.value){
        return true;
      }
      if(value < node.value){
        node = node.left;
      }else{
        node = node.right;
      }
    }
    return false;
  }
}
  
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
  
one.right=three;
one.left=two;
three.right=four;
three.left=five;
two.left=six;
six.right=seven;
seven.left=eight;
seven.right=nine;
const tree = new BinaryTree(one);
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

  
const bst = new BinarySearchTree();
bst.add(10);
bst.add(20);
bst.add(30);
bst.add(40);
console.log(bst.contains(400));
console.log(bst.contains(40));
console.log(bst.contains(10));


module.exports = {BinaryTree,BinarySearchTree,Node};