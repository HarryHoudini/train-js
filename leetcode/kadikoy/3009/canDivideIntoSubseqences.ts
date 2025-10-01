// Given an integer array nums sorted in non-decreasing order
// and an integer k,
// return true if this array can be divided into one or more disjoint
// increasing subsequences of length at least k, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3,3,4,4], k = 3
// Output: true
// Explanation: The array can be divided into two subsequences [1,2,3,4] and [2,3,4] with lengths at least 3 each.

// Example 2:
// Input: nums = [5,6,6,7,8], k = 3
// Output: false
// Explanation: There is no way to divide the array using the conditions required.

// Input: nums = [5,6,7,8], k = 3
// Output: true

// 1 <= k <= nums.length <= 10^5


// [1,2,2,2,2,3,3,4,5,7,8,8,9]
//  | | | | | | | | | | | | |
//  0
// maxDivider=4
// candidate=1
// needParts = 3

// parts = 13/3 = 4,

function canDivideIntoSubsequences(nums: number[], k: number) {
        const n = nums.length
        const maxAllowed = Math.floor(n/k)
        let currentCounter = 1;
        let maxDivider = 1;

        for (let i = 1; i < n; i++) {

            if (nums[i-1] === nums[i]) {
                currentCounter++
            } else {
                if (currentCounter > maxDivider) {
                     maxDivider = currentCounter
                }
                currentCounter = 1
            }
            // Early exit if wi cant divide our nums to need k
            if (maxDivider > maxAllowed) return false
        }

        if (currentCounter > maxDivider) maxDivider = currentCounter


        return maxAllowed >= maxDivider

}
