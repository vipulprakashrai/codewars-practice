//Write a function called validateEmail that takes in a string and returns whether the string is 
//a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains
// an @ symbol and a . symbol.


//solution
function validateEmail(str) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(str);
  }
  
  console.log(validateEmail('john@gmail.com')); 
  console.log(validateEmail('john@gmail')); 