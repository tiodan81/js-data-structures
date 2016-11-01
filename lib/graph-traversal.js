'use strict'

const G = require('./graph')

const dfs = (graph, nodeVal, explored = []) => {
  explored.push(nodeVal)

  const neighbors = G.getNeighbors(graph, nodeVal)

  graph.vertices.forEach(v => {

  })
}
