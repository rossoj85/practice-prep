// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     console.log(Math.sign(n)!=-1)
//     return Math.sign(n)!==-1 ?  +n.toString().split('').reverse().join('') 
//     :
    
//     +(n*Math.sign(n)).toString().split('').reverse().join('')*Math.sign(n)
//   }

//Cleaner COde 
function reverseInt(n){
    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

    return parseInt(reversed) *Math.sign
}

module.exports = reverseInt;
