// https://leetcode.com/problems/is-subsequence/description/?envType=problem-list-v2
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


function isSubsequence(s: string, t: string): boolean {
    let i = 0
    for (const char of t) {
        if (char === s[i]) {
            i++
        }
    }
    return i === s.length
};
