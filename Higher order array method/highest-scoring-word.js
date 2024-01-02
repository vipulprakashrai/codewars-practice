//Given a string of words, you need to find the highest scoring word. 
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

//You need to return the highest scoring word as a string.

//If two words score the same, return the word that appears earliest in the original string.

//All letters will be lowercase and all inputs will be valid.


//Constraints->
//The input string will only contain lowercase letters and spaces. It can not include numbers, special characters, or punctuation.

//solution->
function highestScoringWord(str) {
    let words =  str.split(' ');
    let scoreOfWord =  words.map((word) => {
      let score = 0;
      for(let letter of word){
        score += letter.charCodeAt(0) - 96;
       
      }
       return score;
    })
   let highestScore = 0;
   let highestIndex = 0;
   for(let i = 0; i < scoreOfWord.length; i++){
      if(scoreOfWord[i] > highestScore){
        highestScore = scoreOfWord[i];
        highestIndex = i;
      }
   }
   return words [highestIndex];
 }
 console.log(highestScoringWord('Hello my name i vikram'));