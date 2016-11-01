'use strict'

const expect = require('chai').expect

const Queue = require('../lib/queue')

describe.only('test queue', () => {
  describe('initialize a queue', () => {
    it('should return an empty queue with length zero', () => {
      const q = new Queue()
      expect(q.queue).to.be.instanceof(Array)
      expect(q.queue).to.be.empty
      expect(q.length).to.equal(0)
    })
  })

  describe('test enqueue()', () => {
    it('should add the value to the end of the queue', () => {
      const q = new Queue()
      q.enqueue(5)
      q.enqueue(7)
      expect(q.queue).to.eql([5, 7])
      expect(q.length).to.equal(2)
    })
    it('should error if no value given', () => {
      const eq = new Queue()
      const empty = () => eq.enqueue()
      expect(empty).to.throw(ReferenceError)
    })
  })

  describe('test dequeue()', () => {
    const q = new Queue()
    q.enqueue(5)
    q.enqueue(6)
    const dq = q.dequeue()
    it('should remove the value at queue[0]', () => {
      expect(dq).to.equal(5)
      expect(q.queue).to.eql([6])
      expect(q.length).to.equal(1)
    })
    it('should error if the queue is empty', () => {
      const q = new Queue()
      const dq = () => q.dequeue()
      expect(dq).to.throw(RangeError)
    })
  })

  describe('test peek()', () => {
    it('should return the value at queue[0] without dequeuing', () => {
      const q = new Queue()
      q.enqueue(5)
      q.enqueue(6)
      const peek = q.peek()
      expect(peek).to.equal(5)
      expect(q.queue).to.eql([5,6])
      expect(q.length).to.equal(2)
    })
    it('should return null if queue is empty', () => {
      const q = new Queue()
      const peek = q.peek()
      expect(peek).to.be.null
    })
  })
})
