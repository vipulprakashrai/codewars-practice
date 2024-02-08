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
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.peek());

