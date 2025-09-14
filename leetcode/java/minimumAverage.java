
// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/description/

// 3194. Minimum Average of Smallest and Largest Elements
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:

// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);

        int l = 0;
        int r = nums.length - 1;

        double minAvg = Double.POSITIVE_INFINITY;
        double candidate = 0;

        while (l < r) {
            candidate = (nums[l] + nums[r]) / 2.0;
            double[] a = {candidate, minAvg};
            minAvg = Arrays.stream(a).min().orElseThrow();

            l++;
            r--;
        }
        return minAvg;
    }
}


class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);

        int l = 0;
        int r = nums.length - 1;

        double minAvg = 51.0;
        double candidate = 0;

        while (l < r) {
            candidate = (nums[l] + nums[r]) / 2.0;
            minAvg = Math.min(candidate, minAvg);

            l++;
            r--;
        }
        return minAvg;
    }
}



class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);

        int l = 0;
        int r = nums.length - 1;

        float minAvg = 51;
        float candidate = 0;

        while (l < r) {
            candidate = (nums[l] + nums[r]) / 2.0f;

            minAvg = Math.min(candidate, minAvg);

            l++;
            r--;
        }
        return minAvg;
    }
}


class Solution {
    public double minimumAverage(int[] nums) {
        int[] freq = new int[51]; // values in [1..50]
        for (int v : nums) freq[v]++;

        int lo = 1, hi = 50;
        double minAvg = Double.POSITIVE_INFINITY;

        while (true) {
            while (lo <= 50 && freq[lo] == 0) lo++;
            while (hi >= 1 && freq[hi] == 0) hi--;
            if (lo > hi) break;

            int take = Math.min(freq[lo], freq[hi]);
            if (lo == hi) take = freq[lo] / 2; // pair within same bucket

            if (take == 0) break;

            double avg = (lo + hi) * 0.5;
            if (avg < minAvg) minAvg = avg;

            freq[lo] -= take;
            freq[hi] -= take;
        }
        return minAvg;
    }
}
