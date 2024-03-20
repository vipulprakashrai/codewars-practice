//Write a function called anagramGrouping that takes an array of strings as
// input and returns an array of arrays, where each sub-array contains words that
// are anagrams of each other.

/*
Examples
anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
// Output: [['cat', 'act', 'tac'], ['dog', 'god']]

anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']);
// Output: [['listen', 'silent', 'enlist'], ['hello'], ['world']]
Constraints
The input array words will contain only lowercase alphabetical characters.
*/

//Solution-->

function anagramGrouping (words){
    const anagrams = new Map();
    for(word of words){
      const sortedWord = word.split('').sort().join('')
     if(anagrams.has(sortedWord)){
       anagrams.get(sortedWord).push(word);
      
     }
      else{
        anagrams.set(sortedWord, [word]);
      }
    }
    return Array.from(anagrams.values())
  }
  console.log(anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']));