// https://leetcode.com/problems/two-sum

// function twoSum(nums: number[], target: number): number[] {
//     for (let = 0; i < nums.length; i++ ) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[j] === target-nums[i]) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

function twoSum2(nums: number[], target: number): number[] {
    const hashmap = new Map()
    nums.forEach((_, i)=> hashmap.set(nums[i], i))
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        // There can be only one such element in hash table
        if (hashmap.has(complement) && hashmap.get(complement) !== i ) {
            return [i, hashmap.get(complement)]
        }
    }
    return []
}



function twoSum3(nums: number[], target: number): number[] {
    const numsToMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const requiredValue = target - nums[i];
        const requiredValueIndex = numsToMap.get(requiredValue);

        if (typeof requiredValueIndex === 'number') {
            return [requiredValueIndex, i];
        }
        numsToMap.set(nums[i], i);
    }

    return [];
};
