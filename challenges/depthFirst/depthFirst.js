'use strict';

const {Graph} = require('../graph/graph.js');

class depthFirst extends Graph{
  depthFirst(startNode){
    const visited = new Set(); 
    const stack = []; 

    visited.add(startNode);
    stack.push(startNode);

    while (stack.length) {
      const currentNode = stack.pop();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(!visited.has(neighborNode)) {
          visited.add(neighborNode);
          stack.push(neighborNode);
        }
      }
    }    
    
    let arr = [];
    for (let val of visited) {
      arr.push(val.value);
    }
    return arr;  
      
  }
}



module.exports = depthFirst;

