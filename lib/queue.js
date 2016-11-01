'use strict'

const Queue = module.exports = function() {
  this.queue = []
  this.length = 0
}

Queue.prototype.enqueue = function (val) {
  if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a value')
  this.queue[this.length] = val
  this.length += 1
}

Queue.prototype.dequeue = function () {
  if (!this.length) throw new RangeError('queue is empty')
  const head = this.queue[0]
  const tail = this.queue.slice(1)

  this.queue = tail
  this.length -= 1
  return head
}

Queue.prototype.peek = function () {
  return this.queue[0] || null
}
