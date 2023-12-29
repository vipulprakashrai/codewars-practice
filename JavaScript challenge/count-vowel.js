//Write a function called countVowels that takes in a string and returns the number of vowels in the string.

//Constraints
//It shouldn't matter if the input string is uppercase or lowercase


//solution

function countVowels(str){
    let count = 0;
    for(let i = 0;  i < str.length; i++){
      if(str[i] ==="a"  ||  
         str[i] === "e" || 
         str[i] === "i" || 
         str[i] === "o" ||
         str[i] === "u")
      {
        count++;
      }
    }
    return count;
    
  }
  console.log(countVowels('hello')); 
  console.log(countVowels('why')); 
  console.log(countVowels('mississippi'));