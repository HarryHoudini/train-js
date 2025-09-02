//https://leetcode.com/problems/random-flip-matrix/?source=submission-noac
// 519. Random Flip Matrix
class Solution {
    private map;
    private numbersCount: number
    constructor(private m: number, private n: number) {
       this.map = new Map();
       this.numbersCount = m * n;
    }

    flip(): number[] {
        const rnd = Math.floor(Math.random() * (this.numbersCount+1))
        const idx = this.map.get(rnd) || rnd
        this.map.set(rnd, this.map.get(this.numbersCount - 1) || this.numbersCount)
        this.numbersCount--
        return [idx / this.n, idx % this.n]
    }

    reset(): void {
        this.numbersCount = this.m * this.n;
        this.map.clear()
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
