// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


//ad or remove are better left ot the node class with trees because add that way you can specifiy the node you wan ot 
//add or remove to 
class Node {
    constructor(data, children){
        this.data=data;
        this.children = []
    }
    add(data){
        let newNode=new Node(data)
        this.children.push(newNode)
    }
    remove(data){
        // for(var i=0;i<this.children.length;i++){
        //     console.log(this.children[i].data)
        //    if(this.children[i].data===data){
        //      console.log('hit',this.children[i])
        //      this.children.splice(i,1)
        //    }
        //     }
        //or
        this.children = this.children.filter(node=>{
        return node.data!==data
      })
    }
}

class Tree {
    constructor(){
        this.root=null
    }
    traverseBF(func){
        let queue=[this.root]
        let currentNode
      
        while(queue.length){
            currentNode=queue.shift()

            func(currentNode)
            queue.push(...currentNode.children)         
        }
    }
    //RECURSIVE traverseDF
    traverseDF(func,currentNode=this.root){
         func(currentNode)

        currentNode.children.forEach(child=>{
            this.traverseDF(func,child)
        })
       
    }
    //ITERATIVE SOLUTION BUT THIS MAY ONLY WORK WITH AN IN ORDER
    //DEPTH FIRST the only difference is where we place children in array
    traverseDF(func){
        let queue=[this.root]
        
        while(queue.length){
            let currentNode=queue.shift()
            func(currentNode)

            if(currentNode.children.length) {
                queue.unshift(...currentNode.children)
            }
        }
    }
}

module.exports = { Tree, Node };
