//https://leetcode.com/problems/valid-anagram/

// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false



// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.Collections;



class Main {

    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        char[] chsS = s.toCharArray();
        char[] chsT = t.toCharArray();

        int[] freqS = new int[256];
        int[] freqT = new int[256];

        for (int i = 0; i < chsS.length; i++) {
            freqS[chsS[i]]++;
            freqT[chsT[i]]++;
        }

        for (int i = 0; i < freqS.length; i++) {
            if (freqS[i] != freqT[i])
                return false;
        }
        return true;
    }

  public static void main(String[] args) {

      System.out.println(isAnagrams("listen", "silent")); // true
      System.out.println(isAnagrams("hello", "world"));   // false
  }
}
