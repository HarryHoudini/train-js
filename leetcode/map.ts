// 2635. Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript


function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const applyedArr: number[] = []
    for (let i=1; i <= arr.length; i++) {
        applyedArr[i-1] = fn(i, i-1)
    }
    return applyedArr
};
