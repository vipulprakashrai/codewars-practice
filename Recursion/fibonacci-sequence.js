//Write a function called fibonacci that takes in a number and returns the number at that index of the Fibonacci sequence.

//Constraints
//The input number will always be a positive integer.

//solution->

function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(4)); // 3
  console.log(fibonacci(6)); // 8
  console.log(fibonacci(10)); // 55
  