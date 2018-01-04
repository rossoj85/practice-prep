// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;



 // here we are using ES6 classes class 
 class Queue{
    //constructor is automatically called whenever we define a new instance
    constructor(){
      this.data=[]
    }
    add(data){
      this.data.unshift(data);
    }
    remove(){
      return this.data.pop();
    }
  }

// ES5 queue 
// function Queue(){
//     this.queue=[]
//     this.head=0
//     this.tail=0
//   }
  
//   Queue.prototype.add=function(data){
//      this.queue[this.tail++]=data
//      return this.queue
//   }
  
//   Queue.prototype.remove=function(){
//     if(!this.queue[this.head]) return;
    
//     return this.queue[this.head++]
//   }



module.exports = Queue;
