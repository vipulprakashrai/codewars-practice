//Given an sorted array of 'n' elements and a target elements 't' find the index of 't'
//in the array. Return -1 if the target elements not found.

/* Example-> arr = [-5,2,4,6,10], t = 10 -> return 4 
*/

//Solution->
function binarySearch(arr, target){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx <= rightIdx){
      let midIdx = Math.floor((leftIdx + rightIdx)/2);
    
     if(target === arr[midIdx]){
      return midIdx;
     }
     if(target < arr[midIdx]){
      rightIdx = midIdx -1;
     }
     else{
      leftIdx = midIdx + 1;
     }
   }
    return -1;
  }
  const arr = [-5,2,4,6,10]
  const target = 10;
  console.log(binarySearch(arr, target));