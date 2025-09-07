// Subarray Sum Equals K

// DESCRIPTION (credit Leetcode.com)
// Write a function that returns the total number of contiguous subarrays within a given integer array whose elements sum up to a target K.

// Example 1: Input:

// nums = [3, 4, 7, 2, -3, 1, 4, 2]
// k = 7
// Output: 4

// Explanation: The subarrays that sum to 7 are:

// [3, 4], [7], [7, 2, -3, 1], [1, 4, 2]
// Example 2: Input:

// nums = [1, -1, 0]
// k = 0
// Output: 3

// Explanation: The subarrays that sum to 0 are:

// [-1, 1], [0], [1, -1, 0]


public class Solution {
    public Integer subarraySum(int[] nums, Integer k) {
        Map<Integer, Integer> prefix = new HashMap<>();
        prefix.put(0, 1);

        int sum = 0, count = 0;

        for (int num: nums) {
            sum += num;

            count += prefix.getOrDefault(sum - k, 0);

            prefix.put(sum, prefix.getOrDefault(sum, 0) + 1);
        }
        return count;

    }
}

