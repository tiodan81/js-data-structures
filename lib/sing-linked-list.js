'use strict'

const Node = require('./node')

function LinkedList() {
  this.head = null
  this.tail = null
}

LinkedList.prototype.insertHead = function (val) {
  if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a value')

  if (this.head === null) {
    this.head = new Node(val)
    return null
  } else {
    this.tail = this.head
    this.head = new Node(val)
    this.head.next = this.tail
    return null
  }
}
LinkedList.prototype.traverse = function () {
  let cur = this.head

  while (cur !== null) {
    console.log(cur.data)
    cur = cur.next
  }
}

// const s = new LinkedList()
// s.insertHead(new Node(1))
// s.insertHead(new Node(2))
// s.insertHead(new Node(3))
// s.insertHead(new Node(4))
// console.log(s);

//operations
  //insertAfter
  //deleteAfter
  //deleteHead

module.exports = LinkedList
