//Implement a function called bubbleSort that takes an array of numbers as an argument 
//and returns a sorted array using the Bubble Sort algorithm.

/* Constraints
The input array can contain any number of elements.
The elements in the input array are unique and positive integers.*/

//Solution-1

function bubbleSort(arr){
    let swapped;
    do{
      swapped = false;
      for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          swapped = true;
        }
      }
    }
     while(swapped) 
  }
  
  const arr = [5, 4, 3, 2, 1];
  bubbleSort(arr);
  console.log(arr);

  //Solution-2

  function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i - 1; j++){
        if(arr[j] > arr[j+1]){
          const temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp;
        }
      }
    } 
      return arr;
    }

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));