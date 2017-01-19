// not tested
  function findSucc(n){
      
      if(n.right!=undefined){
          return findLeftmost(n.right);
      }else{
          return findGreaterParent(n);
      }
      
  }
  
  function findLeftmost(n){
      while(n.left){
          n=n.left;
      }
      return n.value;
  }
  
  function findGreaterParent(n){ 
    while(n.parent && n.parent.value<n.value){  
      n = n.parent;
    }
    return n.parent ? n.parent.value : null;
  } 