'use strict';
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this._adjancyList = new Map();
  }
  addVertex(vertex) {
    this._adjancyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    if (
      !this._adjancyList.has(startVertex) ||
        !this._adjancyList.has(endVertex)
    ) {
      console.log('Vertex not found');
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }
  }
  printAll() {
    // console.log(this._adjancyList.entries());
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('V>> ', vertex);
      console.log('E>>', edge);
    }
  }
  size(){
    return this._adjancyList.size;
  }
  // depthFirst(startNode){
  //   const stack = []; 
  //   const checked = new Set(); 

  //   checked.add(startNode);
  //   stack.push(startNode);

  //   while (stack.length) {
  //     const currentNode = stack.pop();
  //     const neighbors = this.getNeighbors(currentNode);
  //     for (let neighbor of neighbors) {
  //       const neighborNode = neighbor.vertex;
  //       if(!checked.has(neighborNode)) {
  //         checked.add(neighborNode);
  //         stack.push(neighborNode);
  //       }
  //     }
  //   }    
    
  //   let array = [];
  //   for (let val of checked) {
  //     array.push(val.value);
  //   }
  //   return array;  
      
  // }
  // getEdge(arr) {
  //   let neighrbor = this.getNeighbors(arr[0]);
  //   console.log('ssssssssssssss',neighrbor);
  //   for (let i = 0; i < neighrbor.length; i++) {
  //     // console.log('aaaaaaaaaaaaaaa',neighrbor[i].vertex);
  //     // console.log('aaaaaaaaaaaa2',arr[1]);

  //     if (arr[1] === neighrbor[i].vertex) {
  //       return `True, ${neighrbor[i].weight}$`;
  //     }
  //   }
  //   return `False, 0$`;
  // }
}
const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(eight, three);
// console.log(graph);
graph.printAll();
console.log('NEIGfffffffffffffffffffffffffHBORS', graph.depthFirst(ten));
// console.log('NEIGHBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbORS', graph.size());
// console.log('NEIGHBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbORS', graph.getEdge([ten,three]));

