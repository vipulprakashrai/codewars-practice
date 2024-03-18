//You are building a phone number directory application.
// Implement a function called phoneNumberDirectory that takes an array of phone numbers as input and returns a Map with names as keys
// and corresponding phone numbers as values.


//Constraints-->
//The input array elements should be formatted as NAME:PHONENUMBER


//Solution->

function phoneNumberDirectory(arr){
    let map = new Map();
    for(item of arr){
     let [name, phoneNumber] = item.split(':');
      map.set(name, phoneNumber);
    }
    return map;
  }
  
  const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
  ];
  
  console.log(phoneNumberDirectory(phoneNumbers));