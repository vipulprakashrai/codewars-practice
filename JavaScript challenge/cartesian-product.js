// Given the two finite non-empty sets, finds their cartesian products

/* example->
const A = [1, 2] and const B = [3, 4]
 A*B = [[1,3], [1,4], [2,3], [2,4]]
*/

//Solution->

function cartesianProduct(arr1, arr2){
    const res = [];
    for(let i = 0; i < arr1.length; i++){
      for(let j = 0; j < arr2.length; j++){
        res.push([arr1[i], arr2[j]]);
      }
    }
    return res;
  }
  
  const arr1= [1,2]
  const arr2 = [3,4,5]
  
  console.log(cartesianProduct(arr1, arr2))
  
  //Time-complexity->BigO-> O(mn)