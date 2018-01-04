// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// test commit
const Stack = require('./stack');

function reverseStacks(initialStack,endStack){
    while(initialStack.peek()){
      endStack.push(initialStack.pop())
    }
  }
  
  class Queue {
    constructor(){
      this.addStack= new Stack()
      this.returnStack=new Stack()
    }
    add(data){
      this.addStack.push(data)
      
      
    }
    remove(data){
      reverseStacks(this.addStack,this.returnStack)
      var currReturn = this.returnStack.pop()
      reverseStacks(this.returnStack,this.addStack)
      return currReturn
    }
    peek(){
        reverseStacks(this.addStack,this.returnStack)
        var currPeek = this.returnStack.peek()
        reverseStacks(this.returnStack,this.addStack)
        return currPeek
    }
  }

module.exports = Queue;
