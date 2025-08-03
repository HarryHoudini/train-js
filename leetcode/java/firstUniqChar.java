class Solution {
     public int firstUniqChar(String s) {
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            // if (map.containsKey(ch)) {
            //     System.out.println(ch);
            //     map.put(ch, map.get(ch) + 1);
            // } else {
            //     map.put(ch,  1);
            // }
            map.put(ch, map.getOrDefault(ch, 0) + 1)
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            char key = entry.getKey();
            int value = entry.getValue();
            if (value == 1) {
                return s.indexOf(key);
            }
        }
        return -1;
    };
}


class Solution {
    public int firstUniqChar(String s) {
        char[] str = s.toCharArray();
        int[] freq = new int[256];

        //count the frequency of each character
        for(int i = 0; i < str.length; i++){
            freq[str[i]]++;
        }

        for(int j = 0; j < str.length; j++){
            //find the first character with frequency 1
            if(freq[str[j]] == 1){
                return j;
            }
        }

        return -1;
    }
}
