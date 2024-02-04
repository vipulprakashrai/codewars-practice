// Given an array of 'n' elements and a target element 't'. Find the index of 't' in
// the array. Return -1 if the target element is not found.

/* example->
arr = [-5,2,10,4,6] 
if t = 10 return 2 
if t = 4 return 3
*/

//Soution->
function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === target){
        return i;
      }
    }
    return -1;
  }
  
  const arr = [-5,2,10,4,6]
  const target = 2;
  console.log(linearSearch(arr,target));