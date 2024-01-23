//Write a function called permutations that takes in a string as a parameter 
//and returns an array of all possible permutations of the characters in the string.


// Constraints
// The input string will only contain lowercase letters
// The input string will not contain any duplicate characters

//Solution->
function permutations(str) {
    const result = [];
  
    if (str.length === 0) {
      result.push("");
      return result;
    }
  
    for (let i = 0; i < str.length; i++) {
      const firstChar = str[i];
      const restOfString = str.slice(0, i) + str.slice(i + 1);
      console.log(restOfString);
      const subPermutations = permutations(restOfString);
  
      for (let j = 0; j < subPermutations.length; j++) {
        result.push(firstChar + subPermutations[j]);
      }
    }
  
    return result;
  }
  
  console.log(permutations("abc")); 
  console.log(permutations("dog"));