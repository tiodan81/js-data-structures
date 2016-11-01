'use strict'

module.exports = function(val, next, prev) {
  if (typeof(val) === 'undefined') throw new ReferenceError('must have val')
  this.val = val
  this.next = next || null
  this.prev = prev || null
}
