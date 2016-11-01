'use strict'

// Node {val, next, prev}
const Node = require('./node')

const search = exports.search = (val, node) => {
  if (typeof val === 'undefined') throw new ReferenceError('plz specify a val to search')

  if (node === null || val === node.val) {
    return node
  } else if (val < node.val) {
    return search(val, node.prev)
  } else {
    return search(val, node.next)
  }
}

const insert = exports.insert = (val, node = null) => {
  if (typeof val === 'undefined') throw new ReferenceError('plz specify a val to insert')

  if (node === null) {
    return new Node(val)
  } else if (val < node.val) {
    
  }
}

//insert(5)
  //{val: 5, next: null, prev: null}

//insert(3, node5)
//{
//   val: 5,
//   next: null,
//   prev: {
//     val: 3,
//     next: null,
//     prev: null
//   }
// }

//insert(4, node5)
// 4 should become 5.prev
// 3 should become 4.prev
//{
//   val: 5,
//   next: null,
//   prev: {
//     val: 4,
//       next: null,
//       prev: {
//         val: 3,
//         next: null,
//         prev: null
//      }
//   }
// }
