// https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
    if ( x === 0) return 0;
    let left = 1, right = x;

    while (left <= right) {
        const mid = Math.floor((left + right)/2)
        if(mid * mid === x) return mid
        if(mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right

};

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

