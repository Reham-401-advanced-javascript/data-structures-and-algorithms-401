'use strict';
let { Graph } = require('../graph/graph.js');

class GetEdge extends Graph {
  getEdge(arr) {
    let neighrbors = this.getNeighbors(arr[0]);
    // console.log('ssssssssssssss',neighrbor);
    for (let i = 0; i < neighrbors.length; i++) {
      // console.log('aaaaaaaaaaaaaaa',neighrbor[i].vertex);
      // console.log('aaaaaaaaaaaa2',arr[1]);
    
      if (arr[1] === neighrbors[i].vertex) {
        return `True, ${neighrbors[i].weight}$`;
      }
    }
    return `False, 0$`;
  }
}


module.exports = GetEdge;