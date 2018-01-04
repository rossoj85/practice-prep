// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//checks against a hash table to see if letter is a voewl 
// IDEAL SOLUTION 
function vowels(str){
    let vowels={'a':true,'e':true,'i':true,'o':true,'u':true}
    let count=0
    
    for(var letter of str){
      if(vowels[letter.toLowerCase()]){
        count++
      }
    }
    return count
  }

  //checks against and array to see if character is a vowel (HOWEVER I THINK THIS IS THE LONGER RUN TIME BECAUSE
    // UNDER THE HOOD INCLUDES IS PROBABLY A LOOP )
  function vowels(str){
    let vowels=['a','e','i','o','u']
    let count=0
    
    for(var letter of str.toLowerCase()){
      if(vowels.includes(letter))count++
    }
    return count
  }
//REGEX solution
// brackets mean if string contains anything inside of the brackets let us know
//g means if you find one, dont stop keep going
//i means case insensitive
// the match function returns an array with all of the  matches\
// to find the count just return the atrray's length 
function vowels(str){
  const matches = str.match(/[aeiou]/gi)
  
  return matches ? matches.length : 0
}

module.exports = vowels;
