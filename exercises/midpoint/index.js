// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    var currentNode= list.head
    console.log(currentNode)

    let slow= currentNode
    let fast = currentNode

  while(fast){
    fast=fast.next ||null
    if(!fast) return slow
    fast=fast.next || null
    if(!fast) return slow
    slow = slow.next
  }
  return slow
}

// slightly condensed    //remember you can put two conditions in for loop
function midpoint(list){
    var currentNode= list.head
    console.log(currentNode)

    let slow= currentNode
    let fast = currentNode

    while(fast.next&&fast.next.next){
        slow=slow.next;
        fast=fast.next.next
    }
    return slow
}

module.exports = midpoint;
