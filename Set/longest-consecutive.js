//Write a function called longestConsecutiveSequence that takes an array of integers as input
// and returns the length of the longest consecutive sequence of integers in the array.


/*
Examples
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]); // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])
longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]); // Output: 10 (The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
Constraints
The input array will contain only integers
The input array may contain duplicate integers
*/

//Solution-->

function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums);
    let longestSequence = 0;
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentSequence = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentSequence++;
        }
        longestSequence = Math.max(longestSequence, currentSequence);
      }
    }
    return longestSequence;
  }
  console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));