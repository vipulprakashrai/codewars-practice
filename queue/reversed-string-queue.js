//Write a function called reverseStringQueue that takes in a string and returns the reverse of that string.
//The function should return the reversed string, but I want you to use the Queue class to do it.


/*
Examples-->
reverseStringQueue('hello'); // olleh
reverseStringQueue('Howdy'); // ydwoH
reverseStringQueue('Greetings from Earth'); // htraE morf sgniteerG

Constraints-->
The string will only contain lowercase letters and spaces
*/

//Solution-->

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
  
  function reverseStringQueue(str) {
    const queue = new Queue();
    for (let i = str.length - 1; i >= 0; i--) {
      queue.enqueue(str[i]);
    }
    let reversedStr = "";
    while(!queue.isEmpty()){
      reversedStr += queue.dequeue();
    }
    return reversedStr;
  }
  console.log(reverseStringQueue("hello")); 
  console.log(reverseStringQueue("Howdy")); 
  console.log(reverseStringQueue("Greetings from Earth")); 
  