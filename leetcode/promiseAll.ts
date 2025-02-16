// 2721. Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    let promiseResolvedCount = 0
    const promisesResult: any[] = []
    return new Promise((resolve, reject) => {
       functions.forEach((fn, i) =>
         fn().then((res: unknown) => {
            if (functions.length - 1 === promiseResolvedCount) {
                resolve(promisesResult)
            }
            promisesResult[i] = res
            promiseResolvedCount++
            }).catch((rej: unknown) => {
                reject(rej)
            })
       )
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
