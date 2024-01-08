//Write a function called reverseString that takes in a string and returns the reversed version of the string. 
//Be sure to use recursion in your solution.

//Examples
// reverseString('hello'); // should return 'olleh'
// reverseString('world'); // should return 'dlrow'
// reverseString(''); // should return ''
// reverseString('a'); // should return 'a'
// reverseString('racecar'); // should return 'racecar'

//Solution->
function reverseString(str){
    if(str === ''){
      return '';
    }
  
    return reverseString(str.substring(1)) + str.charAt(0);
  }
  
  console.log(reverseString('hello'));