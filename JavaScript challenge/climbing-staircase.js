//Given a staircase of n steps, count the no. of distinct ways to
//climb to the top you can either climb 1 or 2 step at a time.

/* 
example->
if n = 1; climbingStairs(1) = 1 | (1)
if n = 2; climbingSairs(2) = 2 | (1,1) & (2)
if n= 3; climbingStairs(3) = 3 | (1,1,1) & (1,2) & (2,1)
*/

//Slution->

function climbingStaircase(n){
    const noOfWays = [1, 2];
    for(i = 2; i <=n; i++){
      noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n-1]
  }
  
  console.log(climbingStaircase(1));
  console.log(climbingStaircase(2));
  console.log(climbingStaircase(4));
  