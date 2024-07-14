// 2637. Promise Time Limit
// https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

type Fn = (...params: any[]) => Promise<any>;

function timeLimit1(fn: Fn, t: number): Fn {
    return async function(...args) {

        const promises =  [
            new Promise((resolve) => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(()=>reject('Time Limit Exceeded'), t))
        ]
        return Promise.race(promises)

    }
};



function timeLimit2(fn: Fn, t: number): Fn {

    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => { reject('Time Limit Exceeded') }, t);
        });

        return Promise.race([fn(...args), timeoutPromise]);
    }
};



function timeLimit(fn: Fn, t: number): Fn {
    return async function(...args) {
         return new Promise((resolve, reject)=> {
               const timeOutId = setTimeout(()=> reject('Time Limit Exceeded'), t)
                fn(...args)
                .then((res)=> resolve(res))
                .catch((err)=> reject(err))
                .finally(()=> clearTimeout(timeOutId))
          })

        // let startTime

        // const timeoutId = setTimeout(() => {
        //     startTime =  Date().now();
        //     return fn(...args)
        // })

        // if (endTime - startTime >= t) {
        //     const endTime = Date().now()
        //     clearInterval(timeoutId)
        // }
        // return new Promise((resolve, reject)=> {
        //    const timeoutId =  setTimeout(()=> {}, t)
        //     }
        // )

    }
};
