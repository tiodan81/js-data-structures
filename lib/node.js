'use strict'

module.exports = function(data, next, prev) {
  if (!data) throw new ReferenceError('must have data')
  this.data = data
  this.next = next || null
  this.prev = prev || null
}
