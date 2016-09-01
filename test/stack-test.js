'use strict'

const expect = require('chai').expect
const Stack = require('../lib/stack')


describe('initialize a stack', () => {
  let size = 10
  let s = new Stack(size)
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
    s = Stack
    expect(s).to.throw(ReferenceError)
  })
  it('should fail if maxSize !number', () => {
    let init = (size) => new Stack('a')
    expect(init).to.throw(TypeError)
  })
})

describe('test stack push', () => {
  let s = new Stack(2)
})


//top should always equal items.length

//push should increment top + 1
//stack.items[top - 1] should equal pushed val
//push should return the stack itself
//push should fail on full stack
//push should fail if no value pushed

//pop should return popped value
//last thing pushed should be returned by pop
//pop should decrement top
//pop should fail on empty stacks
