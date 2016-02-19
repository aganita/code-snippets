"use strict";

class Stack{
    constructor(size){
        if (typeof size !== "number")
            size = 0;
        this.size = size || 0;
        this.stack = [];
    }
    
    push(node){
        return (this.isFull() ? "Stack is Full!" : Boolean(this.stack.push(node)));
    }
    pop(){
        return (this.isEmpty() ? "Stack is Empty" : Boolean(this.stack.pop()));
    }
    
    isEmpty(){
        return (this.stack.length === 0);
    }
    
    isFull(){
        return (this.stack.length == this.size);
    }
    getTop(){
        return (this.stack[this.stack.length-1]);
    }
    
    print(){
        console.log(Array.prototype.join.call(this.stack.reverse(), "\n"));
    }

}


var myStack = new Stack(6);
myStack.push("3");
myStack.push(4);
myStack.push(5);
myStack.print();onsole.log(myStack.print());



// create a list class in JavaScript
class LinkedList{
    constructor() {
        this._head = null;
        this._length = 0;
    };
    
    add(val){
        var node = {
            value: val,
            next: null
        };

        if(this._head === null){
            this._head = node; 
        }
        else{
            let current = this._head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this._length++;
        }
    }
    
    print(){
        let current = this._head;
        while (current) {
            console.log( current.value );
            current = current.next;
        }
    }
    
    remove(val){
        let current = this._head;
        //case-1 
        if(current.value == val){
            this._head = current.next;     
        }
        else{
            let previous = current;
            while(current.next){
        //case-3
        if(current.value == val){
          previous.next = current.next;          
          break;
        }
        previous = current;
        current = current.next;
      }
      //case -2
      if(current.value == val){
        previous.next == null;
      }
    }
    }
}

var smth = new LinkedList();
smth.add(5);
smth.add(6);
smth.add(5);
smth.remove(5);
smth.print();

