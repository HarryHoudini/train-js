// 2721. Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    let promiseResolvedCount = 0
    const promisesArr = []
    return new Promise((resolve, reject) => {
       functions.forEach((fn, i) =>
         fn().then((res) => {
            if (functions.length-1 === promiseResolvedCount) {
                resolve(promisesArr)
            }
            promisesArr[i] = res
            promiseResolvedCount++
            }).catch((rej) => {
                reject(rej)
            })
       )
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
