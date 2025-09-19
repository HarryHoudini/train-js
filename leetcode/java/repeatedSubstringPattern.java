class Solution {
    public boolean repeatedSubstringPattern(String s) {
        // k(times repeat)
        // s = p + p (repeat k >=2 )
        // s + s = p + p + p + p (2k)
        // original idea s without patterns don't appears
        // after middle dubled string
        // result = s + s -> cut string to one because
        // s should apears in dubled str
        // find original in cut


        String dubledString = s + s;

        String cutString = dubledString.substring(1, dubledString.length()-1);

        return cutString.contains(s);

    }
}

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "abaaab"
// Output: false
// Example 3:

// Input: s = "zbczbczbc"
//             123123123
// Output: true


class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int slen = s.length();

        int upTo = (int) Math.ceil(Math.sqrt(slen));
        for (int i = 1; i <= upTo; ++i) {
            if (slen % i == 0) {
                if (i != slen && check(s, s.substring(0, i))) {
                    return true;
                }
                int len2 = slen / i;
                if (len2 != 1 && len2 != slen && check(s, s.substring(0, len2))) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean check(String s, String substr) {
        return s.endsWith(substr) && substr.repeat(s.length() / substr.length()).equals(s);
    }
}
