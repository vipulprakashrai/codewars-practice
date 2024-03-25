// Write a function called symmetricDifference that takes in two arrays and returns an array containing the symmetric difference of the two arrays. 
//The symmetric difference of two arrays is a new array containing only the elements that are present in one of the arrays but not both, with no duplicates.


/*
Examples
symmetricDifference([1, 2, 3], [3, 4, 5]);
// Output: [1, 2, 4, 5]

symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]);
// Output: [1, 5]

symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
// Output: []

symmetricDifference([1, 2, 3], [4, 5, 6]);
// Output: [1, 2, 3, 4, 5, 6]
*/

//Solution->
function symmetricDifference (arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let resultArr = [];
    for(let item of arr1){
      if(!set2.has(item)){
        resultArr.push(item);
      }
    }
    for(let item of arr2){
      if(!set1.has(item)){
        resultArr.push(item);
      }
    }
    return resultArr;
  }
  console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));
  // Output: [1, 2, 4, 5]