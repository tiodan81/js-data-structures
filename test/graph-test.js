'use strict'

const expect = require('chai').expect
const graph = require('../lib/graph')

describe('testing graph', () => {
  describe('createVertex()', () => {
    it('should error if no value given', () => {
      const bad = () => graph.createVertex()
      expect(bad).to.throw(ReferenceError)
    })
    it('should error if value is not string/number', () => {
      const badObj = () => graph.createVertex({})
      const badBool = () => graph.createVertex(true)
      expect(badObj).to.throw(TypeError)
      expect(badBool).to.throw(TypeError)
    })
    it('should return an object with keys [value, neighbors]', () => {
      const v = graph.createVertex(1)
      expect(v).to.eql({ value: 1, neighbors: [] })
    })
  })

  describe('instantiate graph', () => {
    it('should return an object with keys [vertices, edges]', () => {
      const g = graph.graph()
      expect(g).to.eql({ vertices: [], edges: [] })
    })
  })

  describe('test addVertex()', () => {
    it('should error in no graph specified')
    it('should error if vertex already exists')
    it('should add v to g.vertices')
  })
})
