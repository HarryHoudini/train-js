// https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// #2626

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length === 0 ) return init
    let result = init

    for(let i=0; i < nums.length; i++ ) {
        result = fn(result, nums[i])
    }
    return result
};
