// https://leetcode.com/problems/reverse-integer/
class Solution {
    fun reverse(inputX: Int): Int {
        var r = 0
        var num:Int
        var x = inputX
        val cropedLastDigitMaxValue = Integer.MAX_VALUE / 10
        val cropedLastDigitMixValue = Integer.MIN_VALUE  / 10


        while (x != 0) {
            num = x % 10
            x = x / 10

            if (r > cropedLastDigitMaxValue || r > cropedLastDigitMaxValue && num > 7) return 0

            if (r < cropedLastDigitMixValue || r < cropedLastDigitMixValue && num < -8) return 0

            r = r * 10 + num
        }
        return r
    }
}
