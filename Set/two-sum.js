//Write a function called twoSum that takes an array of integers and a target integer 
//as input and returns an array of indices of the two numbers that add up to the target.

/*
Examples
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1] (2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2] (2 + 4 = 6)

console.log(twoSum([3, 3], 6));
// Output: [0, 1] (3 + 3 = 6)
Constraints
Each input integer is unique.
*/

//Solution-->

function twoSum(arr, target) {
    const numSet = new Set();
    for(let i = 0; i < arr.length; i++){
      const required = target - arr[i];
      if(numSet.has(required)){
        return [arr.indexOf(required), i];
      }
       numSet.add(arr[i]);
    }
  
}

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1] (2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2] (2 + 4 = 6)

console.log(twoSum([3, 3], 6));
// Output: [0, 1] (3 + 3 = 6)