// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var results = [];
    for(var array=0;array<n;array++){
      results.push([])
    }
    
    
    let counter = 1;
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;
    //think of this entire function as doing a squeeze
    while(startCol<=endCol&&startRow<=endRow){
      //Top row (this will assign the very last num)
      for(var i=startCol;i<=endCol;i++){
        results[startRow][i]=counter
        counter++     
      }
      startRow++
      
    for(var j=startRow;j<=endRow;j++){
      //right column 
      results[j][endCol]=counter;  
      counter++;             
    }
      endCol--
    for(var k=endCol;k>=startCol;k--){
      //bottomw row
      results[endRow][k]=counter
      counter++;
    }
    endRow--
    
    for(var l=endRow;l>=startRow;l--){
      //left column
      results[l][startCol]=counter;
      counter++
    }
    startCol++
    console.log('startCol',startCol)
    console.log('endCol',endCol)
    console.log('startRow',startRow)
    console.log('endRow',endRow)
  
    
    }
    
    
    
    
    return results
  }

module.exports = matrix;
