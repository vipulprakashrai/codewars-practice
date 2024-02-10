//We are going to try one more Stack challenge. Write a function called isBalanced that takes in a string and checks if the parenthesis are balanced.
//The function should return true if the parenthesis are balanced and false if they are not.


/*
Examples
isBalanced('()'); // true
isBalanced('()()'); // true
isBalanced('(()())'); // true
isBalanced('(()'); // false
isBalanced(')('); // false


Constraints->
The string will only contain parenthesis and no other characters


*/

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
  
  function isBalanced(str){
    const stack = new Stack();
    for(let i = 0; i < str.length; i++){
      if(str[i] === "("){
        stack.push(str[i]);
      }
      else if(str[i] === ")"){
        if(stack.isEmpty()){
          return false;
        }
        else{
          stack.pop();
        }
      }
    }
    return stack.isEmpty();
  }
  
  
  console.log(isBalanced('()'))
  console.log(isBalanced('()()'))
  console.log(isBalanced('(()'))
  console.log(isBalanced(')('))
  
  
  
  
  