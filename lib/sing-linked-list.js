'use strict'

const Node = require('./node')

function LinkedList() {
  this.head = null
  this.tail = null
}

LinkedList.prototype.insertHead = function (newNode) {
  if (!newNode) throw new ReferenceError('plz add a node')

  if (this.head === null) {
    this.head = newNode
    return this
  } else {
    this.tail = this.head
    this.head = newNode
    this.head.next = this.tail
    return this
  }
}
LinkedList.prototype.traverse = function () {
  let cur = this.head

  while (cur !== null) {
    console.log(cur.data)
    cur = cur.next
  }
}

const s = new LinkedList()
s.insertHead(new Node(1))
s.insertHead(new Node(2))
s.insertHead(new Node(3))
s.insertHead(new Node(4))
console.log(s.traverse());

//operations
  //insertAfter
  //deleteAfter
  //deleteHead

module.exports = LinkedList
