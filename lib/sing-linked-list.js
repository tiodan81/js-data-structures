'use strict'

const Node = require('./node')

function LinkedList() {
  this.head = null
  this.current = null
  this.length = 0
}

LinkedList.prototype.insertHead = function (val) {
  try {
    if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a value')

    this.head = new Node(val, this.head)
    this.length += 1
    return null
  } catch (e) {
    return e
  }
}

LinkedList.prototype.insertAfter = function (node, val) {
  //newNode.next := node.next
  //node.next := newNode
}

LinkedList.prototype.traverse = function () {
  let cur = this.head

  while (cur !== null) {
    console.log(cur.data)
    cur = cur.next
  }
}

LinkedList.prototype.search = function (val) {

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
