'use strict'

const expect = require('chai').expect
const SLL = require('../lib/sing-linked-list')

describe('test singly linked list', () => {
  describe('instantiate SLL', () => {
    it('should create an empty list', () => {
      const sll = new SLL()
      expect(sll).to.be.an.instanceof(SLL)
    })
  })

  describe('test insertHead', () => {
    it('should add a new node to head', () => {
      const sll = new SLL()
      sll.insertHead(1)
      expect(sll.head.data).to.equal(1)
      expect(sll.head.next).to.be.null
      expect(sll.head.prev).to.be.null
      expect(sll.current).to.be.null
      expect(sll.length).to.equal(1)
    })
    it('should fail if no value given', () => {
      const sll = new SLL()
      expect(sll.insertHead()).to.be.an.instanceof(ReferenceError)
    })
  })

  describe('test search', () => {
    let sll

    beforeEach(() => {
      sll = new SLL()
      sll.insertHead(1)
      sll.insertHead(2)
    })
    it('should return this.current if value matches', () => {
      // const
    })
    it('should set current and return matching value', () => {
      console.log(sll);
      expect(sll.search(1)).to.equal(1)
      expect(sll.current).to.equal({data: 1, next: null, prev: null})
    })
  })
})
