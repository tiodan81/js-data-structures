'use strict'

module.exports = function(data, next, prev) {
  this.data = data
  this.next = next || null
  this.prev = prev || null
}
