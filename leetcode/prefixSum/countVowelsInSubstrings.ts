// DESCRIPTION
// Write a function to efficiently count vowels within specified substrings of a given string.

// The substrings will be given to you a list queries of [left, right] pairs, which correspond to the substring word[left:right + 1] in Python.

// The function should return a list of integers, where each integer represents the vowel count for the corresponding query. You can assume the input string will only contain lowercase letters.

// Your function should be optimized to run efficiently for a large number of queries.

// Input:

// word = "prefixsum"
// queries = [[0, 2], [1, 4], [3, 5]]
// Output: [1, 2, 1]

// Explanation:

// word[0:3] -> "pre" contains 1 vowels
// word[1:5]-> "refi" contains 2 vowels
// word[3:6]-> "fix" contains 1 vowels

class Solution {
    countVowelSubstrings(word: string, queries: number[][]): number[] {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const prefixSum = Array(word.length + 1).fill(0);

        for (let i=1; i <= word.length; i++) {
            const prevIdx = i - 1
            const isVowels = vowels.has(word[prevIdx])
            prefixSum[i] = prefixSum[prevIdx] + (isVowels ? 1 : 0)
        }

        const result: number[] = []
        for (let i=0; i < queries.length; i++) {
            const left = queries[i][0]
            const right = queries[i][1]

            result[i] = prefixSum[right + 1] - prefixSum[left]
        }


        return result
    }
}


