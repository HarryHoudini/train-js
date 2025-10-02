// https://leetcode.com/problems/first-letter-to-appear-twice/description/
// 2351. First Letter to Appear Twice

сlass Solution {
    public char repeatedCharacter(String s) {
        HashMap<Character,Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (map.containsKey(c)) {
                 return c;
            }
        }
        return '\0';
    }
}


class RepeatedCharacter {
    public char repeatedCharacter(String s) {
        Set<Character> map = new HashSet<>();

        for (char c : s.toCharArray()) {
            if (map.contains(c)) {
                return c;
            }
            map.add(c);
        }

        return 'd';
    }
}
