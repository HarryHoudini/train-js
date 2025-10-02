class FibonacciIterative {
    public int fib(int n) {
     if (n < 2) return n;
     int a = 0, b = 1, sum = 0;

     while (n-- > 1) {
        sum = a + b;
        a = b;
        b = sum;
     }
    return sum;
    }
}


class FibonacciRecursive {
    public int fib(int n) {
       int[]dp = new int[n+1];
       return fibo(n,dp);
    }
    public static int fibo(int n, int[]dp){
        if(n <= 1) return n;
        if(dp[n] != 0) return dp[n];
        return dp[n] = fibo(n-1, dp) + fibo(n-2, dp);
    }
}
