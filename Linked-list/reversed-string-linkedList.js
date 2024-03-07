//Write a function called reverseStringLinkedList that takes in a string and returns the reverse of that string.
//The function should return the reversed string, but I want you to use the LinkedList class to do it.


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
  
  function reverseStringLinkedList(str){
    const list = new LinkedList();
    for(let i = str.length -1; i >= 0; i--){
      list.add(str[i]);
    }
    let reversedStr = "";
    let current = list.head;
    while(current !== null){
      reversedStr += current.data;
      current = current.next;
    }
    return reversedStr;
  }
  
  
   console.log(reverseStringLinkedList('hello')); // olleh
   console.log(reverseStringLinkedList('Howdy')); // ydwoH
   console.log(reverseStringLinkedList('Greetings from Earth')); // htraE morf sgniteerG
  