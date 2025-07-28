// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
    const m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let ans = 0

    for(let i = 0; i < s.length; i++) {
        let curr = s[i]
        let curr1 = s[i+1]
        if(m[curr] < m[curr1]) {
            ans -= m[curr]
        } else {
            ans += m[curr]
        }
        console.log(ans)
    }
    return ans

};

console.log(romanToInt("MCMXCIV")) // 1994
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("III")) // 3
console.log(romanToInt("IV")) // 4
console.log(romanToInt("IX")) // 9
console.log(romanToInt("XLII")) // 42
console.log(romanToInt("XL")) // 40
console.log(romanToInt("XLIX")) // 49
