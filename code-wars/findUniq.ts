export function findUniq(arr: Array<number>): number {
    arr = arr.sort()
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}


export function findUniq2(arr: Array<number>): number {
    const x = arr[arr[0] == arr[1] ? 0 : 2];
    return arr.find(y => y != x);
  }
