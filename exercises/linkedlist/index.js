// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next){
        this.data=data || null;
        this.next=next||null;
    }
}

class LinkedList {
    constructor(){
        this.head= null
    }
    insertFirst(data){
        let newNode = new Node(data)
        if(this.head){
          newNode.next=this.head
        }
        this.head=newNode
    }
    size(){  //could refactor this to start todalNodes=0
                //and iterate through current node inseat of .next
                //(put the ocunter before switching nodes)
        if(!this.head) return 0
        let currentNode=this.head
        let totalNodes=1
        
        while(currentNode.next){
            
          currentNode=currentNode.next
          totalNodes++
        }
        return totalNodes
      }
    getFirst(){
        return this.head
    }
    getLast(){
        if(!this.head) return;
        let currentNode=this.head
        
    while(currentNode.next){
      currentNode=currentNode.next
    }
    return currentNode
    }
    //when there is no refernce ot an object in javascritp, it will automatically be
    //garbage collected. therefore the entire list gets GC'ed when we set the head
    //to null
    clear(){
        this.head=null
    }
    removeFirst(){
        this.head=this.head.next
    }
    removeLast(){
        if(!this.head) return;
    
        if(!this.head.next){
          this.head=null
          return;
        }

        let currentNode=this.head
        let previousNode;
    
        while(currentNode.next){
           previousNode=currentNode
           currentNode=currentNode.next
        }
        previousNode.next=null
      }
    insertLast(data){
        let newNode = new Node(data)
        if(!this.head) {
            this.head= newNode
            return;
          }
        let last = this.getLast()
        last.next=newNode 
    }
    getAt(targetIndex){ //remember linked lists are 0 indexed!
        
        let currentNode=this.head
        let currentIndex=0
        
          while(currentNode){
            if(currentIndex===targetIndex){
              return currentNode
            }
            currentNode=currentNode.next
            currentIndex++
          }
          return null
        }
    removeAt(targetIndex){
        if(!this.head) return;
        if(targetIndex===0){
          this.head=this.head.next
          return;
        }
        let currentNode=this.head
        let currentIndex=0
        let previousNode;
        while(currentNode){
          if(targetIndex===currentIndex){
            let deletedNex= currentNode.next
            previousNode.next=currentNode.next
            return;
          }
          previousNode=currentNode
          currentNode=currentNode.next
          currentIndex++
        }
        previousNode.next=null
    }
    insertAt(data,targetIndex){
        const newNode= new Node(data)
        if(!this.head) {
            this.head=newNode
            return;
            }
        
        if(targetIndex===0){
            let currentTemp=this.head
            this.head=newNode
            this.head.next=currentTemp
            return;
            }
            let currentNode=this.head
            let currentIndex=0
            let previousNode;
            
        while(currentNode){
            if(currentIndex===targetIndex){
                let currentTemp = currentNode
                previousNode.next=newNode
                currentNode=newNode
                currentNode.next=currentTemp
                return;
              }
            previousNode=currentNode
            currentNode=currentNode.next
            //   if(!currentNode){
            //     previousNode.next=newNode
            //     return;
            //   }
             currentIndex++
            }
            previousNode.next=newNode //<<<<--alt to the above if statement
          }
      
}

module.exports = { Node, LinkedList };
