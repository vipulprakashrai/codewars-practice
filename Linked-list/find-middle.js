//Write a function called findMiddle that takes in a linked list.
//The function should return the middle node of the linked list.
//If the list has an even number of nodes, return the second middle node in the list.


/*
Examples
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3); // Middle node
list.add(4);
list.add(5);

findMiddle(list); // returns 3
*/


//Solution-->

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
     constructor() {
      this.head = null;
      this.tail = null;
    }
  
    add(data) {
      const node = new Node(data);
  
      if (this.head === null) {
        this.head = node;
      } else {
        this.tail.next = node;
      }
  
      this.tail = node;
    }
  
  
    get(index) {
      let current = this.head;
      let i = 0;
  
      while (i < index) {
        current = current.next;
        i++;
      }
  
      return current.data;
    }
  
  
    printAll() {
      let current = this.head;
  
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    insertAt(index, data) {
      if (index === 0) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
      } else {
        let current = this.head;
        let previous = null;
        let i = 0;
  
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
  
        const node = new Node(data);
        node.next = current;
        previous.next = node;
      }
    }
  
    removeFrom(index) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let previous = null;
        let i = 0;
  
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
  
        previous.next = current.next;
      }
    }
    
  }
  function findMiddle(list){
    let slow = list.head;
    let fast = list.head;
    let pev = null;
  
    while(fast !== null && fast.next !== null){
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }
    if(fast === null){
      return prev.next;
    }
    else{
      return slow;
    }
  }
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3); // Middle node
  list.add(4);
  list.add(5);
  
  const result = findMiddle(list); // returns 3
  console.log(result.data);