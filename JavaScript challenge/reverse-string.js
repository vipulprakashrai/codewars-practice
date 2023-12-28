//Write a function called reverseString that takes in a string and returns the reverse of that string. 
//In this section, we are really focusing on loops without using any built-in methods, so try that first. 
//If you get stuck, you can always use the built-in methods to solve the problem.

//solution1
function reverseString(str){
    let reversedStr = "";
      for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i]
      }
    return reversedStr;
   
  }
  console.log(reverseString("hello"));


//solution2
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));