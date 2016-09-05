'use strict'

const vertex = (val) => {
  if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a value')
  return { value: val }
}

// adjacency list
// Vertices are stored as records or objects, and
// every vertex stores a list of adjacent vertices.
// This data structure allows the storage of additional data on the vertices.
// Additional data can be stored if edges are also stored as objects, in which case
// each vertex stores its incident edges and
// each edge stores its incident vertices.


//Graph G (V, E)
//undirected: edge {x,y} === {y,x}
//simple: only one edge permitted between two vertices
//finite:
//@V: [v]
//@E: [{x,y}]
exports.Graph = function () {
  this.members
  this.edges
}

// OPERATIONS
  // add_vertex(G, x): adds the vertex x, if it is not there
  // remove_vertex(G, x): removes the vertex x, if it is there
  // add_edge(G, x, y) adds the edge if it is not there
  // remove_edge(G, x, y) removes the edge if it is there
  // get_vertex_value(G, x) returns the value associated with the vertex x
  // set_vertex_value(G, x, v) sets the value associated with the vertex x to v
  // adjacent(G, x, y): tests whether there is an edge from the vertices x to y
  // neighbors(G, x): lists all vertices y such that there is an edge from the vertices x to y
  // get_edge_value(G, x, y): returns the value associated with the edge (x, y)
  // set_edge_value(G, x, y, v): sets the value associated with the edge (x, y) to v.

// PROPERTIES
  //vertex degree = vertex.neighbors.length
