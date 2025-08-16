// https://leetcode.com/problems/is-subsequence/?envType=problem-list-v2
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0;
        char[] sArr = s.toCharArray();
        for (char ch : t.toCharArray()) {
            if (i == s.length()) break;
            if (ch == s.charAt(i)) i++;
        }
        return i == s.length();
    }
}


class Solution {
    public boolean isSubsequence(String s, String t) {
        int i=0, j=0;
        int n = t.length();
        int m = s.length();
        char ss[] = s.toCharArray();
        char tt[] = t.toCharArray();

        if(m<1) return true;
        if(n<1) return false;
        while(i<n && j<m){
            if(tt[i]==ss[j]){
                j++;
            }
            i++;
        }
        if(j==m) return true;
        return false;
    }
}
