// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let results=[]
    
  
  while(array.length>=size){
    results.push(array.splice(0,size))
    console.log(array)
  }
  if(array.length) results.push(array)
  return results
}

//THIS SOLUTION IS CONFUSING AND EXTRA WORK. NOT STRAIGHTOFORWARD
// function funkyChunky(array,size){
//     let chunked=[]
//     for(let element of array){
//       const last = chunked[chunked.length-1]
      
//       if(!last || last.length===size){
//         chunked.push([element])
//       }else{
//         last.push(element)
//       }
//     }
//     return chunked
// }

function chunk(array,size){
    let results=[]
    let prevI=0
    
    for(var i=size;i<array.length;i+=size){
      console.log(prevI,i)
      console.log(array.slice(prevI,i))
      results.push(array.slice(prevI,i))
      prevI=i
    }
    results.push(array.slice(prevI))
    return results
  }



module.exports = chunk;
