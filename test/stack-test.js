'use strict'

const expect = require('chai').expect
const Stack = require('../lib/stack')


describe('initialize a stack', () => {
  const size = 10
  const s = new Stack(size)

  it('should be a Stack', () => {
    expect(s).to.be.an.instanceof(Stack)
  })
  it('should be empty', () => {
    expect(s.top).to.equal(0)
    expect(s.items.length).to.equal(0)
  })
  it('should should have proper maxSize', () => {
    expect(s.maxSize).to.exist
    expect(s.maxSize).to.be.a('number')
    expect(s.maxSize).to.equal(size)
  })
  it('should fail if no maxSize given', () => {
    const empty = Stack
    expect(empty).to.throw(ReferenceError)
  })
  it('should fail if maxSize !number', () => {
    const init = (size) => new Stack('a')
    expect(init).to.throw(TypeError)
  })
})

describe('test stack.push()', () => {
  let size, s

  beforeEach(() => {
    size = 2
    s = new Stack(size)
  })

  it('should increment stack.top', () => {
    const oldTop = s.top
    s.push(5)
    expect(s.top).to.equal(oldTop + 1)
  })
  it('should return the stack itself', () => {
    const pushed = s.push(1)
    expect(pushed).to.deep.equal(s)
  })
  it('top item should equal pushed val', () => {
    const val = 1
    s.push(5)
    s.push(val)
    expect(s.items[s.top - 1]).to.equal(val)
  })
  it('top should equal items.length', () => {
    s.push(1)
    expect(s.top).to.equal(s.items.length)
  })
  it('should fail if no value pushed', () => {
    // const emptyPush = () => {return s.push()}
    // console.log(emptyPush());
    expect(s.push()).to.be.an.instanceof(ReferenceError)
  })
  it('should fail if stack is full', () => {
    s.push('a')
    s.push('b')
    expect(s.push('c')).to.be.an.instanceof(RangeError)
  })
})

describe('test stack.pop()', () => {
  let s

  beforeEach(() => {
    s = new Stack(2)
    s.push('a')
  })

  it('should return popped value', () => {
    expect(s.pop()).to.equal('a')
  })
  it('should decrement top', () => {
    const oldTop = s.top
    s.pop()
    expect(s.top).to.equal(oldTop - 1)
  })
  it('should fail on an empty stack', () => {
    s.pop()
    expect(s.pop()).to.be.an.instanceof(ReferenceError)
  })
})
