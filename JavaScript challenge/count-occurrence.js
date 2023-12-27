// write func called countOccurrences that takes in  a string and a character and return
// the number of occurrence of that character in string.

function countOccurrences(str, char){
    let count=0;
    for( i = 0; i < str.length; i++){
        if(str[i] === char){
          count++;
        }
    }
  return count;
}
console.log(countOccurrences("hello", "l"));


// Solution 2

function countOccurrences(str, char){
    return str.split(char).length -1;
}
console.log(countOccurrences("hello", "l"));