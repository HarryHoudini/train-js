public class Main {

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};

        System.out.println("Before reverse:");
        printArray(numbers);

        int[] reversed = reverseArray2(numbers);

        System.out.println("After reverse:");
        printArray(reversed);
    }

    public static int[] reverseArray(int[] array) {
        int n = array.length;
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            result[i] = array[n - 1 - i];
        }

        return result;
    }

    public static int[] reverseArray2(int[] array) {
        int l = 0;
        int r = array.length - 1;

        while (l < r) {
            array[l] = array[r];
            l++;
            r--;
        }

        return array;
    }

    private static void printArray(int[] array) {
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
