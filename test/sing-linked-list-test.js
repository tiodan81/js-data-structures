'use strict'

const expect = require('chai').expect
const SLL = require('../lib/sing-linked-list')

describe('instantiate SLL', () => {
  it('should create an empty list', () => {
    const sll = new SLL()
    expect(sll).to.be.an.instanceof(SLL)
    expect(sll).to.deep.equal({head: null, tail: null})
  })
})


//node.prev will always be null
