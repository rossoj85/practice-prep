// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let depth = n
//     let columns = depth*2-1
//     let mid = depth-1
   
//     for(let row=1;row<=depth;row++){
//         let string=''
//       for(let slot=0;slot<columns;slot++){
//         let lowerMid= mid-(row-1)
//         let upperMid= mid+(row-1)
        
//         if(slot>=lowerMid&&slot<=upperMid){
//           string+='#'
//         }else{
//           string+=' '
//         }
//       }
      
//       console.log(string)
//     }
//   }

//starting rows at index 0
function pyramid(n) {
    let depth = n
    let columns = depth*2-1
    let mid = depth-1
   
    
    for(let row=0;row<depth;row++){
        let string=''
      for(let slot=0;slot<columns;slot++){
        let lowerMid= mid-(row)
        let upperMid= mid+(row)
        
        if(slot>=lowerMid&&slot<=upperMid){
          string+='#'
        }else{
          string+=' '
        }
      }
      
      console.log(string)
    }
  }

//recursive solution
function pyramid(n, string='',columns=n*2-1,mid=n-1,row=0) {
    let lowerMid= mid-(row)
    let upperMid = mid+(row)
    
    if(row===n) return;
    
    if(string.length===columns){
      console.log(string)
      return pyramid(n, string='',columns,mid,row+1)
    }
    if(string.length>=lowerMid&&string.length<=upperMid){
      string+='#'
    }
    else{
      string+=' '
    }
    pyramid(n,string,columns,mid,row)
  }

module.exports = pyramid;
