//Write a function called validAnagrams that takes in two strings and determines whether they are valid anagrams of each other.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function validAnagrams(str1, str2){
    let countFreq1 = str1.split('').reduce((acc, char) =>{
               acc[char] = (acc[char] || 0) +1;
      return acc;
     },{})
  
  
    let countFreq2 = str2.split('').reduce((acc, char) =>{
               acc[char] = (acc[char] || 0) +1;
      return acc;
     },{})
     
    return Object.keys(countFreq1).every((char)=> countFreq1[char] === countFreq2[char]);
  }
  
  console.log(validAnagrams('listen', 'silent')); 
  console.log(validAnagrams('hello', 'world')); 
  console.log(validAnagrams('astronomer', 'moonstarer')); 
  console.log(validAnagrams('apple', 'banana'));