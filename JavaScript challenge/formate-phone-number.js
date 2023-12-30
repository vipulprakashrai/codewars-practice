//Write a function called formatPhoneNumber that takes in an array of numbers 
//and returns a string representing the phone number formed by concatenating the numbers 
//in the specified format.

//Constraints->
//The input array will always have 10 numbers
//The numbers can be any integer from 0 to 9


//solution1->

function formatPhoneNumber (arr){
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`
}
    
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//solution2

function formatPhoneNumber(arr){
    let resNum = arr.join('');
    return `(${ resNum.substring(0, 3)}) ${resNum.substring(3, 6)}-${resNum.substring(6)}`
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));