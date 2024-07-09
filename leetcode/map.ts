// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

// 2635. Apply Transform Over Each Element in Array
// Easy
// Companies
// Hint
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.



// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const appliedArr: number[] = []
    for (let i=0; i < arr.length; i++) {
         appliedArr[i] = fn(arr[i], i)
    }
    return appliedArr
};


const map2 = function(arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
      transformedArr[index] = fn(element, index);
    });
    return transformedArr;
  };

const map3 = function(arr, fn) {
    return arr.reduce((transformedArr, element, index) => {
      transformedArr[index] = fn(element, index);
      return transformedArr;
    }, []);
  };


