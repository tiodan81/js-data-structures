'use strict'

function Node(data, next) {
  if (typeof(data) === 'undefined') throw new ReferenceError('must have data')
  this.data = data
  this.next = next || null
}


function LinkedList() {
  this.head = null
  this.current = null
  this.length = 0
}

LinkedList.prototype.insertHead = function (val) {
  if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a value')

  this.head = new Node(val, this.head)
  this.length += 1
  return null
}

LinkedList.prototype.insertAfter = function (old, val) {
  const oldNode = this.search(old)

  if (typeof(val) === 'undefined') throw new ReferenceError('plz specify a new value to insert')
  if(!oldNode) throw new ReferenceError('node not found')

  const newNode = new Node(val)

  if (!this.length) {
    this.head = newNode
    this.length += 1
    return
  }

  newNode.next = this.current.next
  this.current.next = newNode
  this.length += 1
}

LinkedList.prototype.deleteHead = function () {
  if (!this.length) throw new RangeError('cannot delete from empty list')
  this.head = this.head.next
  this.length -= 1
}

LinkedList.prototype.deleteAfter = function (node) {
  const old = this.search(node)
  if (!this.length) throw new RangeError('cannot delete from empty list')
  if(!old) throw new ReferenceError('node not found')
  if(!old.next) throw new ReferenceError('old node is the last node')

  old.next = old.next.next
  this.length -= 1
}

LinkedList.prototype.traverse = function () {
  if (this.length === 0) throw new RangeError('cannot traverse empty list')
  this.current = this.head

  while (this.current.next !== null) {
    this.current = this.current.next
  }

  return this.current
}

LinkedList.prototype.search = function (val) {
  if (typeof(val) === 'undefined') throw new ReferenceError('plz enter a value to search')

  if(this.current && this.current.data === val) return this.current

  this.current = this.head
  while(this.current !== null) {
    if(this.current.data === val) {
      return this.current
    } else {
      this.current = this.current.next
    }
  }

  if (this.current === null) return false;
}

const sll = new LinkedList()
sll.insertHead(1)
sll.insertAfter(1, 2)
sll.insertAfter(2, 3)
console.log(sll.search(4))
module.exports = LinkedList
