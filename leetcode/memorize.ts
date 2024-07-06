// 2623. Memoize
// https://leetcode.com/problems/memoize
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const hash : any = {}

    return function(...args) {
        const strArgs = JSON.stringify(args)
          if (hash.hasOwnProperty(strArgs)) {
            return hash[strArgs]
        }
      hash[strArgs] =  fn(...args)
      return hash[strArgs]
    }
}
function memoize1(fn: Fn): Fn {

    function closure(...args) {
        const strArgs = JSON.stringify(args)
        if (closure.hasOwnProperty(strArgs)) {
            return closure[strArgs]
        }

        closure[strArgs] = fn(...args)

        return closure[strArgs]
    }

    return closure
}


function memoize3(fn: Fn): Fn {
    const hash : Map<string, number> = new Map()

    return function (...args: any[]) {
        const strArgs = JSON.stringify(args)
        if (hash.has(strArgs)) {
            return hash.get(strArgs)!
        }
        hash.set(strArgs, fn(...args))
      return hash.get(strArgs)!
    }

}

// 5. const key = a | (b << 15);
// A unique key is generated for the cache by combining the arguments a and b.
// The expression b << 15 shifts the binary representation of b to the left by 15 bits
// and then performs a bitwise OR operation with a. This creates a unique key for the combination of a and b
// Fastest
function memoize4(fn: Fn): Fn {
    const cache = new Map
    return function(a, b) {
        const key = a | b << 15
        return cache.get(key) ?? (cache.set(key, b = fn(a, b)), b)
}

}

const memo = memoize((a)=> a[1] + a[0])

console.log(memo([1, 2]))
console.log(memo([1, 1]))
console.log(memo([1, 2]))

const memo1 = memoize1((a)=> a[1] + a[0])

console.log(memo1([1, 2]))
console.log(memo1([1, 1]))
console.log(memo1([1, 2]))

const memo3 = memoize3((a)=> a[1] + a[0])

console.log(memo1([1, 2]))
console.log(memo1([1, 1]))
console.log(memo1([1, 2]))

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
