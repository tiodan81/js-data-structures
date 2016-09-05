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
  try {
    if (this.length === 0) throw new RangeError('cannot traverse empty list')
    let cur = this.head

    while (cur !== null) {
      console.log(cur.data)
      cur = cur.next
    }
  } catch (e) {
    return e
  }
}

LinkedList.prototype.search = function (val) {
  try {
    if (typeof(val) === 'undefined') throw new ReferenceError('plz enter a value to search')

    if(this.current && this.current.data === val) return this.current

    let cur = this.head
    while(cur !== null) {
      console.log('while', cur);
      if(cur.data === val) {
        console.log('match', cur);
        this.current = cur
        return cur.data
      } else {
        console.log('else', cur);
        cur = cur.next
      }

      //fails to show match if match is last node
      if(cur.next === null) {
        return false
      }
    }
  } catch (e) {
    return e
  }
}

var sll = new LinkedList()
sll.insertHead(1)
sll.insertHead(2)
// console.log(sll);
console.log(sll.search(1))

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
