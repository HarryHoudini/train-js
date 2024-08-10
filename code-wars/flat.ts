const multiArr = [1, [2, [3, 4]], [5]];

const flatThis = (array: any[]) => {
    let sum: any[] = [];

    array.forEach((arr) => {
        if (Array.isArray(arr)) {
            console.log(sum)
            sum = [...sum, ...flatThis(arr)];
        } else {
            sum = [...sum, arr]
        }
    });

    return sum;
};

console.log(flatThis(multiArr));


function flatten(input) {
    const stack = [...input];
    const res: any[] = [];
    while (stack.length) {
      // забираем и удаляем последнее значение из массива
      const next = stack.pop();
      if (Array.isArray(next)) {
        // добавляем к массиву элементы не модифицируя исходное значение
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    //разворачиваем массив, чтобы восстановить порядок элементов
    return res.reverse();
  }
  console.log(
  flatten(multiArr)
  )


  type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
   let stack = [...arr]
   let res = []
   while(stack.length) {
       let lastEl = stack.pop()
        if (Array.isArray(lastEl)) {
            stack.push(...lastEl)
        } else {
            res.push(lastEl)
        }
   }
   return res.reverse()
};
