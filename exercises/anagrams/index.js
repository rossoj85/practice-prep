// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//test commit 


//doing it with sort
function anagrams(stringA,stringB){
    let cleanA = cleanString(stringA)
    let cleanB = cleanString(stringB)
    
    return cleanA===cleanB
  }
  
  
  function cleanString(str){
    return str.replace(/[^\w]/g,"")
      .toLowerCase()
      .split('')
      .sort()
      .join()
  }








//SAME AS BELOW BUT WITH HELPER FUNCTION
// function buildCharmap(str){
//     const charMap={};
    
//     for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
//       charMap[char] =charMap[char]++ || 1;
//     }
    
//     return charMap
//   }
  
//   function anagrams(stringA, stringB){
//     const aCharMap = buildCharmap(stringA)
//     const bCharMap = buildCharmap(stringB)
    
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//       return false;
//     }
//     for(let char in aCharMap){
//       if(aCharMap[char]!==bCharMap[char]){
//         return false
//       }
//     }
//     return true 
//   }



// function anagrams(stringA, stringB) {
//     const newA = stringA.replace(/[^\w]/g,"").toLowerCase()
//     const newB = stringB.replace(/[^\w]/g,"").toLowerCase()
//     const hashA={}
//     const hashB={}
//     console.log(newA)
//     console.log(newB)
    
//     for(let letter of newA){
//       hashA[letter] ? hashA[letter]++ : hashA[letter]=1
//     }
//     for(let letter of newB){
//       hashB[letter] ? hashB[letter]++ : hashB[letter]=1
//     }
    
//     let aKeys=Object.keys(hashA)
//     let bKeys = Object.keys(hashB)
//     let eachKeyEqual=true
    
//     for(let key of aKeys){
//       if(hashA[key]!==hashB[key]){
//         eachKeyEqual=false;
//         break;
//       }
//     }
//     return (eachKeyEqual&& aKeys.length===bKeys.length)
//   }

module.exports = anagrams;
