//Write a function called arrayIntersection that takes in two arrays 
//and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

//Constraints->
//The input arrays can contain any number of elements
//The input arrays can contain any positive integer


//solution
function arrayIntersection(arr1, arr2){
    let resultedArr = [];
    for(let i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i])){
        resultedArr.push(arr1[i]);
      }
    }
    console.log(resultedArr)
  }
  arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])
  arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])