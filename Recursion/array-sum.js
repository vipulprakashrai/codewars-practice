//Write a function called arraySum that takes in an array of numbers and returns their sum using recursion.

//Constraints
//The input array can contain positive and/or negative integers.

//solution->

function arraySum(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + arraySum(arr.slice(1));
  }
  console.log(arraySum([1, 2, 3, 4, 5])); 
  arraySum([-1, -2, -3, -4, -5]);
  arraySum([]);