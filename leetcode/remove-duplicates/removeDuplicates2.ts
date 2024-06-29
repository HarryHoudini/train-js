const removeDuplicates2 = (nums: number[]): number => {
    let k: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    console.log(nums)
    return k;
};

console.log(removeDuplicates([0,0,0,0,0,2,2,3,3,4]));
