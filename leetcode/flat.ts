// https://leetcode.com/problems/flatten-deeply-nested-array/description/
// #2625
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat2 = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const result = [];
    arr.forEach(x => {
        if(Array.isArray(x) && n > 0 ) {
            result.push(...flat(x, n - 1))
        }  else {
            result.push(x);
        }
    })
    return result
};


// Time:  O(n)
// Space: O(h)

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// dfs
const flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
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
