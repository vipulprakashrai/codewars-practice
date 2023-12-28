//Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.
//You may assume that each word consists of only letters and spaces


//solution

function titleCase(str){
    let result =  str.toLowerCase().split(' ');
      for(let i = 0; i < result.length; i++){
        result[i] =  result[i][0].toUpperCase() + result[i].slice(1);
      }
      return result.join(' ');
    }
    console.log(titleCase("I'm a little tea pot"));
    console.log(titleCase('sHoRt AnD sToUt'));
    console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));