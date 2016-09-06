'use strict'

const createVertex = exports.createVertex = (v, n) => {
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

const addVertex = exports.addVertex = (g, v, n) => {
  const vertex = createVertex(v, n)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (vIndex(g, v) !== -1) throw new ReferenceError('that vertex already exists')

  g.vertices.push(vertex)
}

const addEdge = exports.addEdge = (g, x, y) => {
  const vx = vIndex(g, x)
  const vy = vIndex(g, y)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (vx === -1) throw new ReferenceError('vertex ' + x + ' is undefined')
  if (vy === -1) throw new ReferenceError('vertex ' + y + ' is undefined')
  if (isAdjacent(g, x, y)) throw new ReferenceError('edge already exists')

  //enforce edge definition [sm val, lg val]
  x < y ? g.edges.push( [x, y] ) : g.edges.push( [y, x] )
  g.vertices[vx].neighbors.push(y)
  g.vertices[vy].neighbors.push(x)
}

const vIndex = exports.vIndex = (g, x) => {
  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value')
  return g.vertices
          .map(v => v.value)
          .indexOf(x)
}

const getNeighbors = exports.getNeighbors = (g, x) => {
  const ix = vIndex(g, x)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value')

  return g.vertices[ix].neighbors
}

const isAdjacent = exports.isAdjacent = (g, x, y) => {
  const xn = getNeighbors(g, x),
        yn = getNeighbors(g, y)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value for x')
  if (typeof(y) === 'undefined') throw new ReferenceError('plz specify a value for y')

  return xn.indexOf(y) !== -1 && yn.indexOf(x) !== -1
}

const getVertexValue = exports.getVertexValue = (g, x) => {
  const i = vIndex(g, x)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value')

  if (i === -1) {
    return false
  } else {
    return g.vertices[i].value
  }
}

const setVertexValue = exports.setVertexValue = (g, x, v) => {
  const xi = vIndex(g, x)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (vIndex(g, v) !== -1) throw new ReferenceError('vertex with value ' + v + ' already exists')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value for x')

  g.vertices[xi].value = v
  // TODO: needs to update associated edges
}

const removeVertex = exports.removeVertex = (g, x) => {
  const gi = vIndex(g, x)
  const neighbors = getNeighbors(g, x)

  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (gi === -1) throw new ReferenceError('no vertex with value ' + x)

  g.vertices.splice(gi, 1)
  // TODO: remove associated edges (edges.forEach(e) if (e.indexOf(x)) remove e)
  // TODO: remove refs to x from neighbors
}

const removeEdge = exports.removeEdge = (g, x, y) => {
  if (typeof(g) === 'undefined') throw new ReferenceError('plz specify a graph')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value for x')
  if (typeof(y) === 'undefined') throw new ReferenceError('plz specify a value for y')
  if (!isAdjacent(g, x, y)) throw new ReferenceError('no edge between vertices ' + x + ' and ' + y)
  // TODO: remove edge from graph
  // TODO: remove neighbor refs to x & y
}

const matchEdge = exports.matchEdge = (e, x, y) => {
  const match = x < y ? [x, y] : [y, x]

  if (typeof(e) === 'undefined') throw new ReferenceError('plz specify an array of edges')
  if (typeof(x) === 'undefined') throw new ReferenceError('plz specify a value for x')
  if (typeof(y) === 'undefined') throw new ReferenceError('plz specify a value for y')

  for (let edge of e) {
    if (edge[0] === match[0] && edge[1] === match[1]) {
      return e.indexOf(edge)
    }
  }
  return false
}

const g = graph()
addVertex(g, 5)
addVertex(g, 7)
addEdge(g, 5, 7)
// console.log(getNeighbors(g1, 5));
// console.log(getVertexValue(g1, 7))
// console.log(g1)
console.log(matchEdge(g.edges, 7, 76));

// adjacency list
// Vertices are stored as records or objects, and
// every vertex stores a list of adjacent vertices.
// This data structure allows the storage of additional data on the vertices.
// Additional data can be stored if edges are also stored as objects, in which case
// each vertex stores its incident edges and
// each edge stores its incident vertices.
