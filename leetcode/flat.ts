// https://leetcode.com/problems/flatten-deeply-nested-array/description/
// #2625
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const result: MultiDimensionalArray = []
        arr.forEach((el)=> {
        if (Array.isArray(el) &&  n > 0) {
             result.push(...flat(el, n - 1))
            } else {
             result.push(el)
            }
        })

    return result
};


// Time:  O(n)
// Space: O(h)

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// dfs
var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result = [];
    let dfs = (arr, n) => {
        for (const x of arr) {
            if (n === 0 || typeof x === 'number') {
                result.push(x);
                continue;
            }
            dfs(x, n - 1);
        }
    }

    dfs(arr, n);
    return result;
};
