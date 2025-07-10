export function findUniq(arr: Array<number>): number {
    arr = arr.sort()
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}


export function findUniq2(arr: Array<number>): number {
    const x = arr[arr[0] == arr[1] ? 0 : 2];
    return arr.find(y => y != x);
}


export function findUniq3(arr: number[]) : number {
    if (arr.length < 3 ) {
        throw new Error("Array must have at least 3 elements");
    }
    const [a, b, c] = arr;
    const common = a === b || a === c ? a : b;

    for (const num of arr) {
        if (num !== common) {
            return num;
        }
    }
}
