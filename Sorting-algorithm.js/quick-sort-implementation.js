//Implement a function called quickSort that takes an array of numbers as an argument and returns a sorted array 
//using the Quick Sort algorithm.


//Constraints
// The input array can contain any number of elements.
// The elements in the input array are unique and positive integers.
// Notes


//Solution->

function quickSort(arr){
    if(arr.length < 2){
      return arr;
    }
    let pivot = arr[arr.length -1];
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] < pivot){
        leftArr.push(arr[i]);
      }
      else{
        rightArr.push(arr[i]);
      }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }
  
  
  
  console.log(quickSort([5, 4, 3, 2, 1]));
  console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); 