//Implement a function called insertionSort that takes an array of numbers as an 
//argument and returns a sorted array using the Insertion Sort algorithm.

/*
Constraints
The input array can contain any number of elements.
The elements in the input array are unique and positive integers.*/


//Solution->

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
      let numToInsert = arr[i];
      let j = i - 1;
      while(j >= 0 && arr[j] > numToInsert){
        arr[j+1] = arr[j]
        j = j -1;
      }
      arr[j + 1] = numToInsert;
    }
    return arr;
  }
  
  
  console.log(insertionSort([5, 4, 3, 2, 1])); 
  console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));