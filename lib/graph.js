'use strict'

const vertex = exports.vertex = (v, n) => {
  if (typeof(v) === 'undefined') throw new ReferenceError('plz specify a value')
  if (n && !Array.isArray(n)) throw new ReferenceError('neighbors must be an array')

  return {
    value: v,
    neighbors: n || []
  }
}

// Graph G (V, E)
  // @V: [v]
  // @E: [{x,y}]
// undirected: edge {x,y} === {y,x}
// simple: only one edge permitted between two vertices
// finite: V & E must be finite sets
const graph = exports.graph = (v, e) => ({
  vertices: v || [],
  edges: e || []
})

const addVertex = (g, val, n) => {
  if (!g) throw new ReferenceError('specify a graph')
  //use get_vertex_value
  if (g.vertices.indexOf(val) !== -1) throw new ReferenceError('that vertex already exists')

  const v = vertex(val, n)
  g.vertices.push(v)
}

const addEdge = (g, x, y) => {
  const vx = findVertex(g, x)
  const vy = findVertex(g, y)

  if (!g) throw new ReferenceError('specify a graph')
  if (vx === -1) throw new ReferenceError('vertex ' + x + ' is undefined')
  if (vy === -1) throw new ReferenceError('vertex ' + y + ' is undefined')
  //use get_edge_value to check if edge exists

  g.edges.push( [x, y] )
  g.vertices[vx].neighbors.push(y)
  g.vertices[vy].neighbors.push(x)
}

const findVertex = (g, x) => {
  return g.vertices
          .map(v => v.value)
          .indexOf(x)
}

const findEdge = (g, x, y) => {
  const vx = findVertex(g, x),
        vy = findVertex(g, y)
  return vx
}

const getNeighbors = (g, x) => {
  const ix = findVertex(g, x)
  return g.vertices[ix].neighbors
}

const isAdjacent = (g, x, y) => {
  const xn = getNeighbors(g, x),
        yn = getNeighbors(g, y)
  return xn.indexOf(y) !== -1 && yn.indexOf(x) !== -1
}

const getVertexValue = (g, x) => {
  const i = findVertex(g, x)
  if (i === -1) {
    return false
  } else {
    return g.vertices[i].value
  }
}

const g1 = graph()
addVertex(g1, 5)
addVertex(g1, 7)
addEdge(g1, 5, 7)
// console.log(getNeighbors(g1, 5));
// console.log(getVertexValue(g1, 7))
// console.log(g1)
console.log(isAdjacent(g1, 5, 7));

// adjacency list
// Vertices are stored as records or objects, and
// every vertex stores a list of adjacent vertices.
// This data structure allows the storage of additional data on the vertices.
// Additional data can be stored if edges are also stored as objects, in which case
// each vertex stores its incident edges and
// each edge stores its incident vertices.

// OPERATIONS
  // remove_vertex(G, x): removes the vertex x, if it is there
  // remove_edge(G, x, y) removes the edge if it is there
  // set_vertex_value(G, x, v) sets the value associated with the vertex x to v
      // needs to update associated edges
  // get_edge_value(G, x, y): returns the value associated with the edge (x, y)
  // set_edge_value(G, x, y, v): sets the value associated with the edge (x, y) to v.

// PROPERTIES
  //vertex degree = vertex.neighbors.length
