function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];

      if(left == right) return i;
  }

  return -1;
}

function findEvenIndex2(arr) {
    let left = 0, right = arr.reduce((acc, cur) => acc + cur, 0)

    for(let i = 0; i < arr.length; i++) {
       if (i > 0) {
         left += arr[i-1]
       };

       right -= arr[i];

      if (left === right) {
        return i;
      }
    }
    return -1;
   }
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex2([1,2,3,4,3,2,1]))
