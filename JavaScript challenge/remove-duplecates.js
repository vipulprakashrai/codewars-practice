//Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.


//solution->

function removeDuplicates(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
      if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); 
  console.log(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true])); 