// 2715. Timeout Cancellation
// https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn1 = (...args: JSONValue[]) => void

function cancellable(fn: Fn1, args: JSONValue[], t: number): Function {
    const timeoutId = setTimeout(()=> fn.apply(null, args), t)
    return function() {
       clearTimeout(timeoutId)
    }
};


function cancellable1(fn: Function, args: any[], t: number): Function {
    let isCancelled: boolean = false;

    setTimeout(() => {
      if (!isCancelled) {
        fn(...args);
      }
    }, t);

    return () => {
      isCancelled = true;
    };
  }
