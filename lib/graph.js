'use strict'

exports.Vertex = function (val, neighbors) {

  if (typeof(val) === undefined) throw new ReferenceError('plz specify a value')
  this.value = val
  this.neighbors = neighbors || []
}

//adjacency list
// Vertices are stored as records or objects, and every vertex
// stores a list of adjacent ver- tices. This data structure allows
// the storage of ad- ditional data on the vertices. Additional data
// can be stored if edges are also stored as objects, in which case
// each vertex stores its incident edges and
// each edge stores its incident vertices.

exports.Graph = function () {

}

//operations
// adjacent(G, x, y): tests whether there is an edge from the vertices x to y;
// neighbors(G, x): lists all vertices y such that there is an edge from the vertices x to y;
// add_vertex(G, x): adds the vertex x, if it is not there;
// remove_vertex(G, x): removes the vertex x, if it is there;
// add_edge(G, x, y) adds the edge if it is not there
// remove_edge(G, x, y) removes the edge if it is there
// get_vertex_value(G, x) returns the value associated with the vertex x
// set_vertex_value(G, x, v) sets the value associated with the vertex x to v
// if edges have values
  // get_edge_value(G, x, y) returns the value associated with the edge (x,y)
  // set_edge_value(G, x, y, v) sets the value associated with the edge (x,y) to v
