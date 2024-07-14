// 2627. Debounce
// https://leetcode.com/problems/debounce/?envType=study-plan-v2&envId=30-days-of-javascript

type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeoutId = null
    return function(...args) {
        if (timeoutId !== null ) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(function tick() {
            fn(...args)
        }, t)
    }
};
