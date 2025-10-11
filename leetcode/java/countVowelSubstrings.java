
import java.util.Set;


class CountVowelSubstrings {
    public int[] vowelStrings(String word, int[][] queries) {
        Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');
        int[] prefixSum = new int[word.length() + 1];

        for (int i=1; i <= word.length(); i++) {
            boolean isVowels = vowels.contains(word.charAt(i-1));
            prefixSum[i] = prefixSum[i-1] + (isVowels ? 1 : 0);
        }

        int[] result = new int[queries.length];
        for (int i=0; i < queries.length; i++) {
            int left = queries[i][0];
            int right = queries[i][1];
            result[i] = prefixSum[right+1] - prefixSum[left];
        }

        return result;
    }
}
