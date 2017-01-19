function tasksScheduling(workingHours, tasks) {
    tasks.sort(function(a,b){return b-a;});
    if(tasks[0] > workingHours) return -1;
    var count = 0,
        buffer = [],
        best = {diff: workingHours, buffer: []};
    while (tasks.length) {
        fillBucket(tasks, -1, workingHours, buffer, best);
        tasks = removeSubset(tasks, best.buffer);
        best = {diff: workingHours, buffer: []};
        count++;
    }
    return count;
}

function fillBucket(array, prevIndx, diff, buffer, best) {
    for (var i=prevIndx+1; i < array.length; i++){
      if (array[i] && diff - array[i] >= 0) {
        buffer.push(array[i]);
        diff -= array[i];
        array[i] = 0;
        fillBucket(array, i, diff, buffer, best);
        array[i] = buffer.pop();
        diff += array[i];
      }
    }
    if (diff < best.diff){
      best.buffer = buffer.map(function(elm){return elm;});
      best.diff = diff;
    }
}

function removeSubset(arr1, arr2){
  var resArr = [],
      j = 0
  for (var i=0; i < arr1.length; i++){
    if (arr1[i] === arr2[j]){
      j++;
    } else {
      resArr.push(arr1[i]);
    }
  }
  return resArr;
}

tasksScheduling(15,[8, 6, 5, 4, 4, 3]) // 2 
tasksScheduling(2, [1, 2, 1]) // 2