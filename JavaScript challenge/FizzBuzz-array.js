//In this challenge, you will write a function called fizzBuzzArray that takes in a number and returns an array. 
//The array should contain all the numbers from 1 to the number passed in. 
//However, if the number is divisible by 3, you should replace the number with "Fizz". 
//If the number is divisible by 5, you should replace the number with "Buzz". 
//If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".



// solution


function fizzBuzzArray(number) {
    let resultArr = [];
    for(let i = 1; i <= number; i++){
      if( i % 3 === 0 && i % 5 === 0){
        resultArr.push("Fizzbuzz");
      }
      else if( i % 3 === 0){
        resultArr.push("Fizz");
      }
      else if( i % 5 === 0){
        resultArr.push("Buzz");
      }
      else{
        resultArr.push(i);
      }
    }
    console.log(resultArr);
  }
  fizzBuzzArray(15);

