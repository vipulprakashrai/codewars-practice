//Write  a function called numberRange that takes in a startNum and an endNum and returns an array of numbers 
//from startNum to endNum, inclusive. Be sure to use recursion in your solution.

/*Examples
numberRange(1, 5); // should return [1, 2, 3, 4, 5]
numberRange(3, 10); // should return [3, 4, 5, 6, 7, 8, 9, 10]
numberRange(7, 7); // should return [7] (only one number)
*/

//Solution->
function numberRange(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    }
    const result = numberRange(startNum, endNum - 1);
    result.push(endNum);
    return result;
  }
  
  console.log(numberRange(1, 5)); 
  console.log(numberRange(3, 10));
  console.log(numberRange(7, 7));