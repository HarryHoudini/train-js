// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk2 = (arr, size) => {
    return arr.reduce((chunkedArray, element) => {
      const lastChunk = chunkedArray[chunkedArray.length - 1];
      if (!lastChunk || lastChunk.length === size) {
        chunkedArray.push([element]);
      } else {
        lastChunk.push(element);
      }
      return chunkedArray;
    }, []);
  };

  function chunk(arr: any[], size) {
    const chunkedArray: any[] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  }

  function chunk3(arr: any[], size) {
    const chunkedArray: any[] = [];

    while (arr.length) {
      console.log(arr);
      chunkedArray.push(arr.splice(0, size));
    }
    return chunkedArray;
  }

  console.log(chunk3([1, 2, 3, 4, 5], 2));
