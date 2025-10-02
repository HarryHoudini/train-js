import java.util.Set;


public class VowelStrings {
    public int[] vowelStrings(String word, int[][] queries) {
        Set<char> vowels = Set.of('a', 'e', 'i', 'o', 'u');
        int[] prefixSum = new int[word.length() + 1];

        for (int i=1; i <= word.length(); i++) {
            int isVowels = vowels.contains(word.charAt(i))l;
           int prefixSum[i-1] = prefixSum[i] + (isVowels ? 1 : 0);
        }
    }
}
