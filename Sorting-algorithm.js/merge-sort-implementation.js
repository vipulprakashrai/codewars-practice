//Implement a function called mergeSort that takes an array of numbers as an argument and returns a sorted array using the Merge Sort algorithm.

/* Constraints
The input array can contain any number of elements.
The elements in the input array are unique and positive integers.
*/


//Solution->
function mergeSort(arr){
    if(arr.length < 2){
      return arr;
    }  
   let mid = Math.floor(arr.length/2);
   let left = arr.slice(0, mid);
   let right = arr.slice(mid);
   return merge(mergeSort(left), mergeSort(right))
 }
 function merge(left, right){
   let sortedArr = [];
   while(left.length && right.length){
     if(left[0] <= right[0]){
       sortedArr.push(left.shift());
     }
     else{
       sortedArr.push(right.shift());
     }
   }
   return [...sortedArr, ...left, ...right];
 }
 console.log(mergeSort([5, 4, 3, 2, 1])); 
 console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); 