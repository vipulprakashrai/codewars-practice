//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// my solution

function repeatStr (n, s) {
    let str = "";
    for(let i = 1; i <= n; i++){
     str = str + s;
    }
    return str;
   
  }
  repeatStr(2, "@");