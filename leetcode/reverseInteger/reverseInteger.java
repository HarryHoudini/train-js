// https://leetcode.com/problems/reverse-integer/

class Solution {
    public int reverse1(int x) {
        int res = 0;
        boolean isNegative = x < 0;
        String strNum = String.valueOf(Math.abs(x));
        StringBuilder sb = new StringBuilder(strNum).reverse();

        try {
            res = Integer.parseInt(sb.toString());
        }  catch (NumberFormatException e) {
            return 0;
        }

    return isNegative ? -res : res;
    }

    public int reverse2(int x) {
        // x = 123
        int reverse = 0;
        int cropLastDigitMaxVal = Integer.MAX_VALUE / 10;
        int cropLastDigitMinVal = Integer.MIN_VALUE / 10;

        while (x != 0) {
            // num = 3
            int num = x % 10;
            // x = 12
            x = x/10;
            // check reverse not overflow Integer.MAX_VALUE == 2,147,483,647
            if (reverse > cropLastDigitMaxVal || reverse == cropLastDigitMaxVal && num > 7) return 0;
            // check reverse not overflow Integer.MIN_VALUE == -2,147,483,648
            if (reverse < cropLastDigitMinVal || reverse == cropLastDigitMinVal && num < -8) return 0;
            // reverse = 0 * 10 + 3 = 3
            // reverse = 3 * 10 + 2 = 32
            // reverse = 32 * 10 + 1 = 321
            reverse = reverse * 10 + num;
        }
        return reverse;
    }



}
