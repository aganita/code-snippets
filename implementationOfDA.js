"use strict";

class Stack{
    constructor(size){
        this.size = size;
        this.stack = [];
    }
    
    push(node){
        return (this.isFull() ? "Stack is Full!" : Boolean(this.stack.push(node)));
    }
    pop(){
        return (this.isEmpty()? "Stack is Empty" : Boolean(this.stack.pop()));
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
        return Array.prototype.join.call(this.stack.reverse(), "\n");
    }
    
}


var myStack = new Stack(2);
myStack.push(3);
myStack.push(4)
console.log(myStack.print());
