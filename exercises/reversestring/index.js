// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let results=''
    for(var i=str.length-1;i>=0;i--){       //O(N)
        results+=str[i]
    }
    return results
}

// Newer ES6 syntax

function reverse(str) {
    let reversed=''
    
    for(let character of str){     //O(N)
      console.log(character)
      reversed=character +reversed
    }
    return reversed
}

function reverse(str){
   return  str.split('').reduce((reversed,character)=>{
        return character+reversed;
    },'');
}
reverse('asdf')

module.exports = reverse;
