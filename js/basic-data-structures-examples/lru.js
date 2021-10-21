class Node {
    constructor (key, value) {
        this._value = value;
        this._key = key;
        this._prev = null;
        this._next = null;
    }
}
 
class Queue {
    constructor () {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }
    
    getLength(){
        return this._length;
    }
    
    add (node) {
        if (this._head === null && this._tail === null) {
            this._head = this._tail = node;
        } else {
            this._tail._next = node;
            node._prev = this._tail;
            this._tail = node;
            node._next = null;
        }
        this._length++;
    }
    
    remove () {
        let temp = null;
        if (this._head !== null || this._tail !== null) {
            temp = this._head;
            this._head = this._head._next;   
            if (!this._head) {
                this._tail = null;
            } else {
                this._head._prev = null;
            }
            this._length--;
        }
        return temp;
    }
    
    refresh(node){
        if (this._tail === node) return;
        if (node === this._head){
            node._next._prev = null;
            this._head = node._next;
        }else{
            node._prev._next = node._next;
            node._next._prev = node._prev;
        }
        this._length--;
        this.add(node);
    }
}
 
class LRUCache  {
    constructor (capacity) {
        if (!Number.isInteger(capacity) || capacity <= 0) {
            throw new Error("Bad capacity");
        }
        this._capacity = capacity;
        this._queue =  new Queue();
        this._hashmap = {};
    }
    
    get(key){
        let node = this._hashmap[key];
        if (node) {
            this._queue.refresh(node);
            return node._value;
        } else {
            return -1;
        }
    }
    
    set(key, value){
        if (this._hashmap[key]) {
            this._hashmap[key]._value = value;
            this._queue.refresh(this._hashmap[key]);
        }else{
            let node = new Node(key, value);
            if (this._queue.getLength() === this._capacity){
                let tempKey = this._queue.remove()._key;
                delete this._hashmap[tempKey];
            }
            this._queue.add(node);
            this._hashmap[key] = node;
        }
    }
}