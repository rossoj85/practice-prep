// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

var reversefunc = require('../reversestring')


// function palindrome(str) {
//     if(reversefunc(str)===str) return true

//     return false
// }
// palindrome('tot')

//In this function we check every character of the string against its mirror on 
//the other side of the array
function palindrome(str){
    return str.split('').every((char,i)=>{
      return char===str[str.length-1-i]
    })
  }
  
module.exports = palindrome;
