function reverse(x: number): number {
   const str = Math.abs(x).toString().split('').reverse().join('')
   if (2 ** 31 < Math.abs(Number(str))) return 0

   if (Math.sign(x) === 1) {
        return Number(str)
   } else {
        return Number(str) * -1
   }

};
