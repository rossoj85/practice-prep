// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//RECURSIVE EXAMPLE O(n^2)
function bubbleSort(arr,pointer=arr.length-1) {
    console.log(pointer)
    if(pointer===0) return arr
    console.log(arr)
  
   
   for(var i=0;i<pointer;i++){
     if(arr[i]>arr[i+1]){
       let temp=arr[i+1]
       arr[i+1]=arr[i]
       arr[i]=temp
     }
   }
   return bubbleSort(arr,pointer-1)
}
//TWO FOR LOOPS  //O(n^2)
function bubbleSort(arr){
      for(var i=0;i<arr.length;i++){
          //remember to subtract i from lengtht ot move pointer
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j+1]
        arr[j+1]=arr[j]
        arr[j]=temp
      }
    }
  }
  return arr
}
function selectionSort(arr) {
    let indexOfMin=0
    for(var i=0;i<arr.length-1;i++){
       let indexOfMin=i

      //be careful with j<=arr.length-1 and j<arr.length-1
      //to get full arr we want j<=arr.length-1 or j<arr.length
      for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[indexOfMin]){
            indexOfMin=j
            }
        }
            if(i!==indexOfMin){
            let lesser=arr[indexOfMin]
            arr[indexOfMin]=arr[i]
            arr[i]= lesser
      }
    }
    return arr
}

function mergeSort(arr) {
  if(arr.length<2) return arr 
  let mid = Math.ceil(arr.length/2)
  let left=arr.slice(0,mid)
  let right=arr.slice(mid) ///if no endpoin is specified for slice, it iwll go to end of array


  
  return merge(mergeSort(left),mergeSort(right))
  
}

function merge (left, right) {
  let results =[]
  console.log('HIIIIIIIII')
  while(left.length&&right.length){
    if(left[0]<right[0]){ results.push(left.shift())
    }
    else results.push(right.shift())
  }
  
  return [...results,...left,...right]
//  return left.length ? results.concat(left):results.concat(right)
}

module.exports = { bubbleSort, selectionSort,merge, mergeSort };
