//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Examples (Input -> Output):
//* "String"      -> "SSttrriinngg"
//* "Hello World" -> "HHeelllloo  WWoorrlldd"
//* "1234!_ "     -> "11223344!!__  "


// my solution

function doubleChar(str) {
    // Your code here
    let resStr = "";
    for(let i = 0; i < str.length; i++){
      resStr = resStr + str[i] + str[i];
      
    }
    return resStr;
  }
  