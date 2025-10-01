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
// maxFreq=3
// candidate=1
// needParts = 3

// maxAllowed = 13/3 = 4,



class Solution {
    canDivideIntoSubsequences(int[] nums, int k) {
        int maxAllowed = nums.length / k;
        int maxFreq = 1;
        int candidate = 1;

        for (int i=1; i < nums.length; i++) {
            if (nums[i-1] == nums[i]) {
                candidate++;
            } else {
                if(candidate > maxFreq) {
                    maxFreq = candidate;
                }
                candidate=1;
            }
            if (maxFreq > maxAllowed) {
                return false;
            }
        }

        if (candidate > maxFreq) maxFreq = candidate;

        return maxFreq <= maxAllowed;
    }
}
