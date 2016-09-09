'use strict'

//implement using dynamic array

function Stack(maxSize) {
  if (!maxSize) throw new ReferenceError('maxSize is required')
  if (typeof(maxSize) !== 'number') throw new TypeError('maxSize must be a number')
  this.maxSize = maxSize
  this.top = 0
  this.items = []
}

Stack.prototype.push = function (item) {
  try {
    if (typeof(item) === 'undefined') throw new ReferenceError('don\'t push nothing')
    if (this.top === this.maxSize) throw new RangeError('stack is full')
    this.items[this.top] = item
    this.top += 1
    return this
  } catch(e) {
    throw e
  }
}

Stack.prototype.pop = function () {
  try {
    if(!this.top) throw new ReferenceError('cannot pop from empty stack')
    this.top -= 1
    return this.items.pop()
  } catch (e) {
    throw e
  }
}

module.exports = Stack
