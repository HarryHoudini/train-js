// 1796. Second Largest Digit in a String
// https://leetcode.com/problems/second-largest-digit-in-a-string/

function secondHighest(s: string): number {
    let first = -1;
    let second = -1;
    for (const ch of s) {
        if ((/\d/).test(ch)) {
            const char = Number(ch)
            console.log( second, char)
            if (char > first) {
                second = first
                first = char;
            }
            if (char !== first && char > second) {
                second = char;
            }

        }
    }
    return second;
}

function secondHighest2(s: string): number {
    let first = -1;
    let second = -1;
    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            const char = ch.charCodeAt(0) - 48;

            if (char > first) {
                second = first
                first = char;
            }
            if (char !== first && char > second) {
                second = char;
            }
        }
    }
    return second;
}

const s = "12321"
const s2 = "077"
const s3 = "111"
// console.log(secondHighest(s)) // 2
console.log(secondHighest(s2)) // 0
// console.log(secondHighest(s3)) // -1
