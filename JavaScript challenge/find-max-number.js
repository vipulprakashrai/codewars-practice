// write a function called findMaxNumber that takes in a array of number and returns
//  largest number in array

//solution1
function findMaxNumber(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
       if(arr[i] > max){
         max = arr[i];
       }
    }
    return max;
  }
  console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  //solution2
  function findMaxNumber(arr){
    return Math.max(...arr);
  }
  console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));