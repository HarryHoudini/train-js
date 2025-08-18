// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
    let subArraySum = nums[0];
    let maxSubArraySum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]
        subArraySum = Math.max(curr, subArraySum + curr)
        maxSubArraySum = Math.max(subArraySum,maxSubArraySum)
    }
    return maxSubArraySum
}

