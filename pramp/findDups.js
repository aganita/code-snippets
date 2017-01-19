function findDup(arr1, arr2) {

   if (arr1.length > arr2.length){
      let longArr = arr1,
          shortArr = arr2;  
   }else{
      let longArr = arr2,
          shortArr = arr1;       
   } 
   
   let index,
       intersecArr = [];
   
   longArr.sort((a,b) => { return a - b; });
   
   for (let i = 0; i < shortArr.length; i++ ){
      index = binarySearch(longArr, shortArr[i]); 
      if (index >= 0)
         intersecArr.push(shortArr[i]);
   }
   
   return intersecArr;
}





function binarySearch(arr, elm){
   
   //...
   
   
   return index;
}


geeksforgeeks.com
leetcode.com