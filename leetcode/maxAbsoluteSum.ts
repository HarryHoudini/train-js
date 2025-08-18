//https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/

// Example 1:

// Input: nums = [1,-3,2,3,-4]
// Output: 5
// Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
// Example 2:

// Input: nums = [2,-5,1,-4,3,-2]
// Output: 8
// Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.


function maxAbsoluteSum(nums: number[]): number {
    let prefixSum = 0
    let max = 0
    let min = 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum > max) max = prefixSum
        if (prefixSum < min) min = prefixSum
    }

    return Math.abs(max-min)
}



function maxAbsoluteSum2(nums: number[]): number {
    let maxPositiveSum = 0
    let mixNegativeSum = 0
    let result = 0

    for (const curr of nums) {
       maxPositiveSum = Math.max(0, maxPositiveSum + curr)
       mixNegativeSum = Math.min(0, mixNegativeSum + curr)
       result = Math.max(maxPositiveSum, -mixNegativeSum, result)
    }

    return result
}
