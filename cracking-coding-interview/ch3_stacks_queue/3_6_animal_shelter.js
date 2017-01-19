class Animals{
  constructor(type){
    this.type = type;
    this.order = null;
  }
  
  setOrder(num){
    this.order = num;
  }
  
  getOrder(){
    return this.order;
  }
}

class Cat extends Animals{
  constructor(){
    super('cat');
  }
}

class Dog extends Animals{
  constructor(){
    super('dog');
  }
}

class AnimalSelter{
  constructor(){
    this.catQueue = [];
    this.dogQueue = [];    
    this.order = 0;
  }
  
  add(type){
    let newAnimal;
    this.order++;
    
    if (type === 'dog') 
      newAnimal = new Dog(); 
    else if (type === 'cat')
      newAnimal = new Cat();
    else 
      throw Error('The shelter accepts dogs or cats only at the moment');
      
    newAnimal.setOrder(this.order);
    
    (newAnimal instanceof Dog) ? this.dogQueue.push(newAnimal) : this.catQueue.push(newAnimal);
    
    return this;
  }
  
  dequeueAny(){
    let dogOrder = this.dogQueue.length > 0 ? this.peekDog().getOrder() : Number.POSITIVE_INFINITY,
        catOrder = this.catQueue.length > 0 ? this.peekCat().getOrder() : Number.POSITIVE_INFINITY;
    let animal;
    if (dogOrder > catOrder) 
      animal = this.dequeueCat();
    else 
      animal = this.dequeueDog();
      
    return animal;
  }
  
  peekCat(){
    return this.catQueue[0];
  }
  
  peekDog(){
    return this.dogQueue[0];
  }
  
  dequeueDog(){
    if (this.dogQueue.length === 0) throw Error ('No dogs in the shelter');
    return this.dogQueue.shift();    
  }  

  dequeueCat(){
    if (this.dogQueue.length === 0) throw Error ('No cats in the shelter')    
    return this.catQueue.shift();
  }  
  
  print(){
    console.log('cat queue = ', this.catQueue, '\n dog queue = ', this.dogQueue);
  }
  
}

let shelter = new AnimalSelter();
shelter.add('cat').add('dog').add('cat');
shelter.dequeueAny();
shelter.dequeueCat();
shelter.dequeueDog();

shelter.print();













