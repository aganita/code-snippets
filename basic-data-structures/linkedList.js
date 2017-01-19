class LinkedList{
  constructor() {
    this._head = null;
    this._length = 0;
  }
  
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
    return this;
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
    //remove the head node
    if(current.value === val){
        this._head = current.next;     
    }
    else{
      let previous = this._head;
      current = current.next;
      while(current){
        if(current.value === val){
          previous.next = current.next;          
          break;
        }
        previous = previous.next;
        current = current.next;
      }
    }
    
    return this;
  }
  
  // implemented with temp buffer as hash table. Time: O(N), Space: O(N)
  removeDups(){
    let current = this._head,
        countMap = {};
    while (current) {
      if (current.value in countMap){
        this.remove(current.value);
      }
      else 
        countMap[current.value] = 1;
      current = current.next;
    }
    
    return this;
  }
  
}

function getKthToLastElement(list, k){
    let current = list._head,
        counter = 0,
        runner = list._head;
    while (current) {
        if (counter === k) {
          runner = list._head;
        }
        counter++;
        runner = runner.next;
        current = current.next;
    }
    return runner.value;
}



/////TODO under construction
function partition(list, partition){
  let current = list._head,
      tempNode = {};
  
  while(current){
    if (current.value < partition) {
      tempNode = list._head;
      
      }
    current = current.next;
  }
}

function addToHead(list, node){
  let tempNode = list._head;
  list._head = node;
  list._head.next = tempNode;
  return list;
}
////

var smth = new LinkedList();
smth.add(4).add(6).add(4).add(5).add(4).add(3).add(3);
smth.removeDups().print();
getKthToLastElement(smth, 3);