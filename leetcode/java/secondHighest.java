class Solution {
    public int secondHighest(String s) {
        int first = -1;
        int second = -1;

        for (char ch : s.toCharArray()) {
            if (Character.isDigit(ch)) {
                int d = Character.getNumericValue(ch);
                if (d > first) {
                    second = first;
                    first = d;
                }
                if (first != d && d > second) {
                    second = d;
                }
            }
        }
        return second;
    }
}
