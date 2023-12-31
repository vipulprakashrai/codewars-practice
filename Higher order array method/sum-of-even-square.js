//Let's start off with a fairly simple challenge, but one that uses a few different array methods.
// Write a function called sumOfEvenSquares that takes an array of numbers and returns the sum of the squares of the even numbers in the array.

//solution->

function sumOfEvenSquares (arr){
    let filterdArr = arr.filter((num) => num % 2 === 0);
    let squaredNumArr =  filterdArr.map((item) => item*item);
     let result =  squaredNumArr.reduce((acc, elem) => {
             return acc + elem;
     },0);
     return result;
   }
   console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 20 (2^2 + 4^2)
   console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])); // 20 (0^2 + 2^2 + 4^2)
   console.log(sumOfEvenSquares([])); // 0