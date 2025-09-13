// https://leetcode.com/problems/subarray-sum-equals-k/

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



// for Discovery

class Solution {
    private static final int NULL = Integer.MIN_VALUE, MIXER = 0x9E3779BA;
    public static int subarraySum(int[] nums, final int k){
        final int mask = mask(nums.length);
        final int[] hashtable = new int[mask + 1];
        int res = 0, sum = 0, zeros = 1;
        for(final int n : nums){
            sum += n;
            final int diff = sum - k;
            if(diff != 0){
                int i = diff * MIXER & mask;
                while(true){
                    final int key = hashtable[i];
                    if(key == 0) break;
                    if(key == diff){
                        res += hashtable[i+1];
                        break;
                    }
                    i = i + 2 & mask;
                }
            }else{
            res += zeros;
            }
            if(sum != 0){
                int i = sum * MIXER & mask;
                while(true){
                    final int key = hashtable[i];
                    if(key == 0){
                        hashtable[i] = sum;
                        hashtable[i + 1] = 1;
                        break;
                    }
                    if(key == sum){
                        hashtable[i+1]++;
                        break;
                    }
                    i = i + 2 & mask;
                }
            }else{
            zeros++;
        }
    }
    return res;
    }
    public static int mask(int n){
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >>8;
        return (n << 1) | 31;
    }
}
