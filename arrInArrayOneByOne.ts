// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

const a = ["az", "toto", "picaro", "zone", "kiwi"]

function partlist(arr: string[]): string[][] {
    return arr.map((_: string, index: number) => [arr.slice(0, index).join(' '), arr.slice(index).join(' ')]).slice(1);
}

console.log(partlist(a))

