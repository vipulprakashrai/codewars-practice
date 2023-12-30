//Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive),
// where one number is missing. It should return the missing number.

//Constraints
//If an empty array is passed in, it should return 1
//If nothing is passed in, it should return undefined

//solution


function findMissingNumber(arr){
    if(!arr){
      return undefined;
    }
     let n = arr.length + 1;
    let sum = n*(n+1)/2;
    var actualSum = 0;
    for(let i = 0; i < arr.length; i++){
      actualSum = actualSum + arr[i];
    }
    return sum - actualSum;
    
  }
  console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])); 
  console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])); 
  console.log(findMissingNumber());
  console.log(findMissingNumber([]));