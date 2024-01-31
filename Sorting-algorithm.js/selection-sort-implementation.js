//Implement a function called selectionSort that takes an array of numbers as
// an argument and returns a sorted array using the Selection Sort algorithm.


/*
Constraints
The input array can contain any number of elements.
The elements in the input array are unique and positive integers.
*/


//Solution->
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
      let minIndex = i;
      for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[minIndex]){
          minIndex = j;
        }
      }
      if(minIndex !== i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
    
  }
  
  
  console.log(selectionSort([5, 4, 3, 2, 1])); 
  console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));