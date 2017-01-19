function mergeArr2intoArr1(arr1, arr2, l1, l2){
  let indx1 = l1 - 1,
      indx2 = l2 - 1,
      resIndx = arr1.length - 1;
  while (indx2 >= 0){
    if(indx1 >= 0 && arr1[indx1] > arr2[indx2]){
      arr1[resIndx] = arr1[indx1];
      indx1--;
    }else{
      arr1[resIndx] = arr2[indx2];
      indx2--;
    }
    resIndx--;
  }
  return arr1;
}

mergeArr2intoArr1([1,4,8,true,true,true,true], [3,5,6,7], 3, 4);