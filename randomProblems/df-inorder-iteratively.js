 
// val, left, rigth

// val, prev, next


    //     7
    //   3    9
    // 1  4  8 10
    
    // 1 3 4 7 8 9 10
    
    // 3 -> 7 -> 9   
    
    
    // ->7->
    
    // [treenode 7, linkedlistnode 7]
    
    // while (!stack.isEmpty) {
    // 	let curr = stack.pop();
      
    //   if (curr[0].left) {
    //   	addValueToLeftOfNode(curr[0].left.value, curr[1]);
    //     stack.push([curr[0].left, curr[1].prev);
    //   }
      
    //   if (curr[0].right) {
    //   	addValueToLeftOfNode(curr[0].right.value, curr[1]);
    //     stack.push([curr[0].right, curr[1].next);
    //   }
    // }