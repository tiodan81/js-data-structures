'use strict'

const Node = require('./node')
//{ data: x, next: null, prev: null }
//prev will always be null

function LinkedList() {
  this.head = null
  this.tail = null
}

LinkedList.prototype.insertHead = function (newNode) {
  if (!newNode) throw new ReferenceError('don\'t add nothing')

  if (this.head === null) {
    this.head = newNode
    return this
  } else if(this.head && this.tail === null) {
    this.tail = this.head
    this.head = newNode
    this.head.next = this.tail
    return this
  } else {
    console.log('hello');
    // var oldHead = this.head
    //newNode.next := list.firstNode
    //list.firstNode := newNode
    newNode.next = this.head
    this.head = newNode
    this.tail = this.head.next
    return this
  }
}

const s = new LinkedList()
s.insertHead(new Node(1))
// console.log(s);
s.insertHead(new Node(2))
// s.insertHead(new Node(3))
console.log(s);
//after one head insertion
//LinkedList {
//   head: {
//     data: 1,
//     next: null,
//     prev: null
//   },
//   tail: null
// }

//after two head insertions
//LinkedList {
//   head: {
//     data: 2,
//     next: {        //just the next node
//       data: 1,
//       next: null,
//       prev: null
//     },
//     prev: null
//   },
//   tail : {       //all other nodes
//     data: 1,
//     next: null,
//     prev: null
//   }
// }

//after three head insertions
//LinkedList {
//   head: {
//     data: 3,
//     next: {
//       data: 2,
//       next: {
//         data: 1,
//         next: null,
//         prev: null
//       },
//       prev: null
//     }
//   },
//   tail: {
//
//   }
// }


// function insertBeginning(List list, Node newNode)
// insert node before current first node

//operations
  //insertAfter
  //deleteAfter
  //deleteHead
  //traverse

module.exports = LinkedList
