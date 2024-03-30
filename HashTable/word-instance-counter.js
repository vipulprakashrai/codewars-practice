const HashTable = require('./HashTable');


    function wordInstanceCounter(str, word) {
        const words = str.toLowerCase().split(/\W+/);
        const wordFrequency = new HashTable();
        const targetWord = word.toLowerCase();
        let count = 0;
      
        for (const currentWord of words) {
          if (currentWord === '') continue;
      
          if (wordFrequency.has(currentWord)) {
            wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
          } else {
            wordFrequency.set(currentWord, 1);
          }
      
          if (currentWord === targetWord) {
            count = wordFrequency.get(currentWord);
          }
        }
      
        return count;
    }


console.log(
    wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
  ); // Output: 2
  console.log(
    wordInstanceCounter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'ipsum'
    )
  ); // Output: 1
  console.log(wordInstanceCounter('Hello, world!', 'hello')); // Output: 1
  console.log(wordInstanceCounter('Hello, Hello, Hello!', 'hello')); // Output: 3

  