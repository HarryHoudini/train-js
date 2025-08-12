import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.Collections;



class Main {

   public static boolean isAnagrams(String str1, String str2) {
      char[] chars = str1.toCharArray();
      char[] chars2 = str2.toCharArray();

      int[] freq1 = new int[256];
      int[] freq2 = new int[256];

      for (int i = 0; i < chars.length; i++) {
        freq1[chars[i]]++;
        freq2[chars2[i]]++;
      }

      for (int j = 0; j < chars.length; j++) {
        if (freq1[chars[j]] != freq2[chars2[j]]) return false;
      }

      return true;

    }

  public static void main(String[] args) {

      System.out.println(isAnagrams("listen", "silent")); // true
      System.out.println(isAnagrams("hello", "world"));   // false
  }
}
