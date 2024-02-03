//Write a function called maxSubarraySum that takes an array of integers and a positive integer k as input. 
//The function should find the maximum sum of any subarray of length k using an O(n) solution by using the sliding window technique.

/*
Examples
const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;
console.log(maxSubarraySum(arr1, k1)); // Output: 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2)); // Output: -9
Constraints
The input integer k will be between 1 and the length of the array.
*/


//Solution->

function maxSubarraySum(arr, k){
    let maxSum = 0;
    let currentSum = 0;
    for(let i = 0; i < k; i++){
      maxSum += arr[i]; 
    }
    currentSum = maxSum;
    for(let i = k; i < arr.length; i++){
      currentSum = currentSum + arr[i] - arr[i - k]
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
    
  }
  
  
  const arr = [2, 5, 3, 1, 11, 7, 6, 4];
  const k = 3;
  console.log(maxSubarraySum(arr, k)); 

  //Time-Complexity- O(n)