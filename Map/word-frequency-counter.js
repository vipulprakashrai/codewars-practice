//Write a function called wordFrequencyCounter that takes a string as input and 
//returns a map that represents the frequency of each word in the string. 
//We did a similar challenge way back that counted the occurrences of a character. 
//This function should count the occurrences of each word, ignoring case and excluding punctuation.



//Constraints-->
//The input string will only contain letters, spaces, and punctuation marks.


//Solution-->

function wordFrequencyCounter(str) {

    const words = str.toLowerCase().split(/\W+/);
    const wordFrequency = new Map();
  
    for (const word of words) {
      if (word === '') continue;
      if (wordFrequency.has(word)) {
        wordFrequency.set(word, wordFrequency.get(word) + 1);
      } else {
        wordFrequency.set(word, 1);
      }
    }
    return wordFrequency;
  }
  
  console.log(wordFrequencyCounter('The quick brown fox jumps over the lazy dog.'));