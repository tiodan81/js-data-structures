'use strict'

const expect = require('chai').expect
const SLL = require('../lib/sing-linked-list')

describe('test singly linked list', () => {
  describe('instantiate SLL', () => {
    it('should create an empty list', () => {
      const sll = new SLL()
      expect(sll).to.be.an.instanceof(SLL)
      expect(sll.length).to.equal(0)
    })
  })

  describe('test insertHead()', () => {
    it('should fail if no value given', () => {
      const sll = new SLL()
      const badInsert = () => sll.insertHead()
      expect(badInsert).to.throw(ReferenceError)
    })
    it('should add a new node to head', () => {
      const sll = new SLL()
      sll.insertHead(1)
      sll.insertHead(2)
      expect(sll.head.data).to.equal(2)
      expect(sll.head.next).to.eql({ data: 1, next: null })
      expect(sll.current).to.be.null
      expect(sll.length).to.equal(2)
    })
  })

  describe('test insertAfter()', () => {
    it('should fail if no old value given or old value not found')
    it('should fail if no new value given')
    it('should insert newNode at head if list empty')
    it('should insert newNode after oldNode if list !empty')
    it('should increment SLL.length')
  })

  describe('test traverse()', () => {
    let sll

    beforeEach(() => {
      sll = new SLL()
      sll.insertHead(1)
      sll.insertHead(2)
      sll.insertHead(3)
    })

    it('should fail if called on an empty list', () => {
      const empty = new SLL()
      const emptyTraverse = () => empty.traverse()
      expect(emptyTraverse).to.throw(RangeError)
    })

    it('should return the last node', () => {
      const expected = { data: 1, next: null }
      const last = sll.traverse()
      expect(last).to.eql(expected)
    })
  })

  describe('test search()', () => {
    let sll

    beforeEach(() => {
      sll = new SLL()
      sll.insertHead(1)
      sll.insertHead(2)
    })
    it('should return false if no match found')

    it('should return this.current if value matches', () => {
      // const
    })
  })
})
