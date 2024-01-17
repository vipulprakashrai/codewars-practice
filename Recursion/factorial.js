//Write a function called factorial that takes in a number and returns the factorial of that number.

//Constraints
//The input number will always be a positive integer

//solution
function factorial(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return n * factorial(n - 1);
  }
console.log(factorial(0)); 
console.log(factorial(5)); 
console.log(factorial(10));
  