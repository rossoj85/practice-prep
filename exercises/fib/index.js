// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution      //LINEAR RUN TIME you have a for loop. As n increases by 1, the foor loop(and array increases by 1)
function fib(n) {
    let sum=[]
    for(var i=0;i<=n;i++){   //make sure i is <=0 or jsut initate the array with 0 and 1
      if(i===0||i===1){
        sum.push(i)
      }else{
        sum.push(sum[i-1]+sum[i-2])
      }
      
    }
    return sum[sum.length-1]
  }

// RECURSIVE SOLUTION 
function fib(n) {           //exponential runtime 
    if(n===0) return 0
    if(n===1) return 1
    
    return fib(n-1)+fib(n-2)
  }

  //but the recursive soliton is too slow...

  //FIB RECURSIVE WITH INTENSE MEMOIZATION FUNCTION
  function memoize(fn){
    const cache={}
    return function(...args){
      if(cache[args]) return cache[args]
      
     const result = fn.apply(this,args)
    cache[args]=result
    
    return result
    }
  }
  
  function fib(n, memo={}) { 
      if(n===0) return 0
      if(n===1) return 1
      
      return fib(n-1)+fib(n-2)
    }
  
   fib = memoize(fib)  //ignore the linter settings 


  //SIMPLIFIED RECURSIVE WITH MEMO 
  function fib(n, memo={}){             //O(n) linear runtime
    if(n===1 || n===0) return n
    
    else if(memo[n]) return memo[n]
    
    else memo[n] = fib(n-1,memo)+ fib(n-2,memo)
    
    return memo[n]
  }

module.exports = fib;
