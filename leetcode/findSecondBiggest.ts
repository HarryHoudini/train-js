// findSecondBiggest([1, 7, 8, 5, 4, 2]); // → 7
// findSecondBiggest([1, 1, 1]); // → undefined
// findSecondBiggest([2, 2, 1, 0]); // → 1
// findSecondBiggest([-5, -2, -8, -1]); // → -2

function findSecondBiggest(arr: number[]): number | undefined {
   const big = {}
    for (let i = 0; i < arr.length; i++) {
        if (big.first === undefined || arr[i] > big.first) {
            big.second = big.first
            big.first = arr[i]
        }
        if (arr[i] !== big.first && (big.second === undefined || arr[i] > big.second) ) {
            big.second = arr[i]
        }
    }
    return big.second
}



function findSecondBiggest(arr: number[]): number | undefined {
    let first = -Infinity
    let second = -Infinity

    for (const n of arr) {
        if (n > first) {
            second = first
            first = n
        }
        if (n < first && n > second) {
            second = n
        }
    }

    return second === -Infinity ? undefined : second
}

console.log(findSecondBiggest([1, 1, 1]));          // → undefined
