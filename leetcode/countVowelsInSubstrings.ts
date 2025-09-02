class Solution {
    countVowelSubstrings(word: string, queries: number[][]): number[] {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const prefixSum = Array(word.length + 1).fill(0);

        for (let i=1; i <= word.length; i++) {
            const isVowels = vowels.has(word[i])
            prefixSum[i] = prefixSum[i-1] + (isVowels ? 1 : 0)
        }

        for (let i=0; i <= queries.length; i++) {

        }


        return result
    }
}
