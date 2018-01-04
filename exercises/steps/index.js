// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//this is the firs solution that came to mind. But what is the O(n) of the repeat function?
//EASIEST TO READ!
function steps(num){
    for(var i =1;i<=num;i++){
      console.log('#'.repeat(i)+' '.repeat(num-i))
    }
   }



//this is the iterative solution with two for loops and an O(n^2)
function steps(num){
    for(var row=1;row<=num;row++){
     let stair=''
       for(var col=1;col<=num;col++){ //we create rows
         if(col<=row) stair+='#'
         else stair+=' '
       }
       console.log(stair)
    }
   }
   
//RECURSIVE CASE FOR LOOP 
function steps(num,pass=0){
    let string=''
    if(pass===num) return;
    
    for(var row=0;row<num;row++){
      if(row<=pass) string+='#'
      else string+=' '
    }
    console.log(string)
    return steps(num,pass+1)
  }


//RECCOMENDED RECURSIVE CASE 


//MISTAKE!!!!!!!!!!!
//THE logs keep getting pushed on the stack because they occur after the minor recursive call. When the major 
//recursive case finally gets hit, it is last in first out 
// function steps(num,row=0,string=''){
  
//     if(num===row) return;
    
//     if(string.length===num){
      
//       return steps(num,row+1)
//     }
    
//     if(string.length<=row){
//       string+='#'
//     }else{
//       string+='e'
//     }
//     steps(num,row,string)
//     console.log(string)  <-------MISPLACED CONSOLE LOG!!!!!
    
//   }


// OPTIMAL (MOST IMPRESSIVE) SOLUTION
function steps(num,row=0,string=''){
  
    if(num===row) return;
    
    if(string.length===num){
      console.log(string)
      return steps(num,row+1)
    }
    
    if(string.length<=row){
      string+='#'
    }else{
      string+=' '
    }
    steps(num,row,string)
    
    
  }

  //further condensed
  function steps(num,row=0,string=''){
  
    if(num===row) return;
    
    if(string.length===num){
      console.log(string)
      return steps(num,row+1)
    }
    
    const add = string.length<=row ? '#' : ' '
    steps(num,row,string+add)
    
    
  }
module.exports = steps;
