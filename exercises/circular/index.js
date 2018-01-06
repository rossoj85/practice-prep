// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// function circular(list){
//     let visited={}
//     let currentNode=list.head
//     console.log(currentNode)
    
//     while(currentNode){
        
//       if(visited[currentNode.data]) return true
//       visited[currentNode.data]=true
//       currentNode=currentNode.next
//     }
//     return false
//   }

//Recursive solution 
// function circular(list,currentNode=list.head,visited={}){
   
//     if(!currentNode) return false
//     if(visited[currentNode.data]) return true 
//     visited[currentNode.data]= true 
    
//     return circular(list,currentNode.next,visited)
//   }
//IF WE STORE THE WHOLE OBJECT  INSEAD OF THE OBJECT DATA, THIS PROBLEM BREAKS DOWN. WHY?
//cannot convert it to object.json becase it is a circular object 
//HERE WE ARE USING THE DATA AS A UNIQUE IDENTIFIER, however htwre can be cases where two different nodes can 
// contain the same data. We ned a different approach

function circular(list){
    let slow= list.getFirst();
    let fast=list.getFirst();

    while(fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
        
        if(slow===fast){
            return true
        }
    }
    return false
}

module.exports = circular;
