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
