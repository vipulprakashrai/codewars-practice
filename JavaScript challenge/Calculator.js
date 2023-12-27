//Write a function called Calculator that takes in 2 numbers and an operator and return the result of the calculation.

function Calculator(n1, n2, operator){
    if(operator === "+"){
      return n1 + n2;
    }
   else if(operator === "-"){
     return n1 - n2;
   }
   else if(operator === "*"){
     return n1 * n2;
   }
   else if(operator === "/"){
     return n1 / n2;
   }
   else{
     return "invalid operator"
   }
 }
 console.log(Calculator(1, 2, "+"))
 console.log(Calculator(10, 5, "-"))
 console.log(Calculator(2, 2, "*"))
 console.log(Calculator(10, 5, "/"))