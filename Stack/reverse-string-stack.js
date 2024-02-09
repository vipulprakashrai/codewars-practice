//Write a function called reverseStringStack that takes in a string and returns the 
//reversed version of the string. Be sure to use the Stack class that we created.

/*
Constraints
The string will only contain lowercase letters and spaces
Examples
reverseStringStack('hello'); // olleh
reverseStringStack('Howdy'); // ydwoH
reverseStringStack('Greetings from Earth'); // htraE morf sgniteerG
*/

//Solution>
class Stack{
    constructor(){
      this.stack = [];
    }
    push(elem){
      this.stack.push(elem)
    }
    pop(){
      //if empty return null
      if(this.isEmpty()){
        return "stack empty"
      }
      return this.stack.pop()
    }
    isEmpty(){
      return this.size() === 0;
    }
    peek(){
      if(this.isEmpty()){
        return null
      }
      return this.stack[this.size() - 1];
    }
    size(){
      return this.stack.length;
    }
  
  }
  
  
  function reverseStringStack(str){
    const stack = new Stack();
    for(let i = 0; i < str.length; i++){
      stack.push(str[i]);
    }
    let reversedString = '';
    while(!stack.isEmpty()){
      reversedString += stack.pop();
    }
    return reversedString;
  }
  console.log(reverseStringStack('hello'));
  console.log(reverseStringStack('Howdy'));