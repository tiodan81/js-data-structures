'use strict'

const expect = require('chai').expect
const Stack = require('../lib/stack')

describe('testing the stack', function() {
  let s

  describe('initialize a stack', function() {
    let size = 10
    s = new Stack(size)
    it('should be a Stack', function() {
      expect(s).to.be.an.instanceof(Stack)
    })
    it('should be empty', function() {
      expect(s.top).to.equal(0)
      expect(s.items.length).to.equal(0)
    })
    it('should should have proper maxSize', function() {
      expect(s.maxSize).to.exist
      expect(s.maxSize).to.be.a('number')
      expect(s.maxSize).to.equal(size)
    })
  })
})

//init should fail if !maxSize
//init should fail if maxSize !number

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
