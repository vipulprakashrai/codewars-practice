//Write a function called findMissingLetter that takes in an array of consecutive (increasing)
// letters as input and returns the missing letter in the array.

//Constraints->
//The input array will only contain letters in one case (lower or upper)
//If no letters are in the array, return an empty string


//solution1->
function findMissingLetter(arr){
    let alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let startIndex = alphabet.indexOf(arr[0])
  
    for(let i = 0; i<arr.length; i++){
      if( arr[i] !== alphabet[startIndex + i]){
        return alphabet[startIndex + i]
      }
    }
  }
  console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
  console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); 
  console.log(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']));

  //solution2->

  function findMissingLetter(arr){
    let startChar = arr[0].charCodeAt(0)
    for(let i = 0; i < arr.length; i++){
      let currentChar = arr[i].charCodeAt(0);
      if(currentChar-startChar > 1){
        return String.fromCharCode(startChar+1)
      }
      startChar = currentChar
    }
   
 }
 console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
 console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); 
 console.log(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']));