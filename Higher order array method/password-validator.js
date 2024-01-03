/*Write a function called validatePassword that takes in a string and validates it based on the following criteria:

The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one lowercase letter.
The password must contain at least one digit.
The function should return true if the password is valid according to the criteria, and false otherwise.
*/


//Solution->
function validatePassword(str){
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passRegex.test(str);
}
console.log(validatePassword('Abc12345'));
