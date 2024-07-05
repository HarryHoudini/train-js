// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.


export function binaryArrayToNumber(arr: number[]): number{
    return parseInt(arr.join(""), 2)
};


export function binaryArrayToNumber1(arr: number[]): number{
    return arr.reverse().reduce((a, n, i) => a + n*(2**i), 0);
  };


export function binaryArrayToNumber3(arr: number[]): number{
    let decimal: number = 0;
    let count: number = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 1) {
        decimal += count;
      }

      count *= 2;
    }

    return decimal;
  };
