//Write a function called isValidIPv4 that takes a string as input and returns true 
//if the input is a valid IPv4 address in dot-decimal format, and false otherwise. 
//An IPv4 address should consist of four octets, with values between 0 and 255, inclusive.

// Constraints
// The input will be a single string.


//solution->
function isValidIPv4(str){
    let splittedStr = str.split(".");
     if(splittedStr.length !== 4){
       return false;
     }
   return splittedStr.every((item)=>{
     const num = Number(item)
      return num >= 0 && num <= 255 && num.toString() === item;
   }) 
 } 
 
 console.log(isValidIPv4('1.2.3.4')); // true
 console.log(isValidIPv4('123.45.67.89')); // true
 console.log(isValidIPv4('123.045.067.089')); // false
 console.log(isValidIPv4('123.456.78.90')); // false