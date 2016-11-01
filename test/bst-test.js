'use strict'

const expect = require('chai').expect
const Node = require('../lib/node')
const bst = require('../lib/bst')

describe.only('test BST', () => {

  describe('test search()', () => {
    it('should error if no val given', () => {
      const emptySearch = () => bst.search()
      expect(emptySearch).to.throw(ReferenceError)
    })
    it('should return null if no match found', () => {
      const tree = new Node(5, new Node(7), new Node(3))
      expect(bst.search(4, tree)).to.be.null
    })
    it('should return val if match found', () => {
      const tree = new Node(5, new Node(7), new Node(3))
      expect(bst.search(7, tree)).to.eql({ val: 7, next: null, prev: null})
    })
  })

  describe('test insert()', () => {
    it('should insert the node at the root of an empty tree')
    it('should ')
  })
})
