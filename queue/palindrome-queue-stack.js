//Create a function called isPalindromeQueueStack that takes in a string and checks if it is a palindrome.
//The function should return true if the string is a palindrome, and false if it is not. 
//Again, use the Queue and Stack data structures to solve this problem.


/*
Examples-->
isPalindromeQueueStack('racecar'); // true
isPalindromeQueueStack('hello'); // false
isPalindromeQueueStack('A man, a plan, a canal: Panama'); // true
*/

//Solution-->

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
      return this.stack.length === 0;
    }
    peek(){
      if(this.isEmpty()){
        return null
      }
      return this.stack[this.stack.length - 1];
    }
  }
  
  
  
  class Queue {
    constructor() {
      this.items = {};
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    dequeue() {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
  
    peek() {
      return this.items[this.front];
    }
  
    size() {
      return this.rear - this.front;
    }
  
    isEmpty() {
      return this.rear - this.front === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  function isPalindromeQueueStack(str){
      const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const stack = new Stack();
      const queue = new Queue();
    for(let i = 0; i < formattedStr.length; i++){
      let char = formattedStr.charAt(i);
      stack.push(char);
      queue.enqueue(char);
   }
  
    while(!queue.isEmpty()){
      if(queue.dequeue() !== stack.pop()){
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindromeQueueStack('racecar')); 
  console.log(isPalindromeQueueStack('hello'));
  console.log(isPalindromeQueueStack('A man, a plan, a canal: Panama'));