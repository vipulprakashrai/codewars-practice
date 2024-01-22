//Write a function called flattenArray that takes in an array containing
// nested arrays of integers and returns a new array with all the integers 
//from the nested arrays flattened into a single level.


//Constraints
// The input array can contain nested arrays of any depth
// The input array can contain any number of nested arrays

//Soluton->

function flattenArray(arr) {
    let newArr = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        newArr = newArr.concat(flattenArray(item));
      } else {
        newArr.push(item);
      }
    }
    return newArr;
  }
  
  console.log(flattenArray([1, [2, [3, [4, [5]]]]])); 
  