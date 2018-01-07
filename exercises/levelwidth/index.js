// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//MY SOLUTION
function levelWidth(root) {
    let currentNode;
    let queue=[root,'x']
    let counts=[1]
    
    while(queue.length){
       currentNode=queue.shift()
      if(currentNode==='x'&& queue.length){
        counts.push(queue.length)
        queue.push('x')
      }else
        if(currentNode.children&&currentNode.children.length){
            //all of the x's before the last are still getting thoguh because 
            //of double conditional
        queue.push(...currentNode.children)
        } 
    }
    return counts
  }
//RECCOMENDED SOLUTION 

// function levelWidth(root){
//     const arr= [root,'s']
//     const counters=[0];

//     while (arr.length>1){
//         const node=arr.shift();
//         if(node==='s'){
//             counters.push(0)
//             arr.push('s')
//         }else{
//             arr.push(...node.children);
//             counters[counters.length-1]++
//         }
//     }
//     return counters
// }

module.exports = levelWidth;
