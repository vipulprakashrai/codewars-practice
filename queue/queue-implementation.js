class Queue{
    constructor(){
      this.items = [];
    }
  
    enqueue(element){
      return this.items.push(element);
    }
  
    dequeue(){
      return this.items.shift();
    }
  
    isEmpty(){
      return this.items.length === 0;
    }
  
    peek(){
      if(!this.isEmpty()){
        return this.items[0];
      }
      return null;
    }
  
    size(){
      return this.items.length;
    }
  
    print(){
      console.log(this.items.toString());
    }
  }
  
  const queue = new Queue();
  console.log(queue.isEmpty());
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.size());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());