// 66. Plus One

// https://leetcode.com/problems/plus-one/description/

function plusOne(digits: number[]): number[] {
    let n = digits.length - 1

    for(let i = n ; i >= 0; i--) {
        console.log(i)
        if(digits[i] == 9) {
            console.log(digits)
            digits[i] = 0;
        } else {
            console.log(digits[i])
            digits[i]++
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};


console.log(plusOne([2,9,9]))
console.log(plusOne([9]))
