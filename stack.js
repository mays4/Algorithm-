const  Stack = function(){
  this.count = 0;
  this.storage = {};
  // add a value into the end of the stack
  this.push= (value)=>{
       this.storage[this.count]= value;
       this.count++;
  }
  // remove and returns the value at the end of the stack
  this.pop= ()=>{
    if (this.count === 0){
      return undefined;
    }
    this.count --;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = ()=>{
    return this.count;
  }
  //return the value at the end of the stack
  this.peek = ()=>{
    return this.storage[this.count-1];
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("free");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
