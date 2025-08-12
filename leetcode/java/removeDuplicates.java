import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;


class Main {

  public static int[] removeDuplicates (int[] nums) {
    Set<Integer> uniq = new LinkedHashSet<>();
    for (int num : nums) {
        uniq.add(num);
    }


   return uniq
            .stream()
            .mapToInt(Integer::intValue)
            .sorted()
            .toArray();
  }


  public static void main(String[] args) {
    int[] nums = {1,2,4,2,4,5,6,3,7};
    int[] result = removeDuplicates(nums);
    System.out.println(Arrays.toString(result));


  }
}
