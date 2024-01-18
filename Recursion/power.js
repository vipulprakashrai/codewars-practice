//Write a function called power that takes in a base and an exponent and returns the result of raising the base to the power of the exponent. 
//Use recursion to solve this problem.

//Constraints
//The base and exponent will always be positive integers

//solution-->

function power(base, exponent){
    if(exponent === 0){
      return 1;
    }
    return base * power(base, exponent-1);
  }
  
  console.log(power(2, 3)); 
  console.log(power(5, 2)); 
  console.log(power(3, 4)); 
