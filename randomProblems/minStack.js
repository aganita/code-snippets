// TODO
// leetcode.com/problems/min-stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

class Stack{
  constructor(){
    this.stack = [];
    this.min = [];
  }
  
  push(x){
    this.stack.push(x);
    if (this.min.length === 0)
      this.min[0] = x;
    else 
      if(x <= this.getMin())
        console.log("this top", this.top(), x)
        this.min.push(x);
  }
  
  pop(){
    if (this.top() === this.getMin())
      this.min.pop();
    this.stack.pop();

  }
  
  top(){
    return this.stack[this.stack.length - 1];
  }
  
  getMin(){
      console.log(this.stack, this.min);
    return this.min[this.min.length - 1];
    
  }
  

  
}

let myStack = new Stack();
myStack.push(1);
myStack.push(3);
myStack.top();
myStack.getMin();

//http://www.businessinsider.com/jesse-livermores-trading-rules-2014-9
//https://developers.google.com/speed/articles/optimizing-javascript