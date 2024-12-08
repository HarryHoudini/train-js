/* eslint-disable */
function removeDuplicates(nums: number[]) {
    //   return arr.map((item) => (arr.includes(item) ? arr.splice(arr.indexOf(item), 1) : item));
    //   return arr.map((item, _, itArr) => itArr.filter((it)=>  it === item).length > 1 ? '_' : item);
    // return arr
    //     .map((val, idx) => (arr.indexOf(val) === idx ? val : "_"))
    //     .sort((a, b) => {
    //         if (a === "_") {
    //             return -1;
    //         }
    //         if (b === "_") {
    //             return -1;
    //         }
    //     });

        let insertIndex = 1;
        for(let i = 1; i < nums.length; i++){
            // We skip to next index if we see a duplicate element
            console.log(nums[i], nums[i-1])
            console.log(nums)
           if (nums[i] !==  nums[i-1] ){
                nums[insertIndex] = nums[i]
                insertIndex++;
           }
           console.log(nums)
        }
        console.log(nums)
        return insertIndex;

}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
