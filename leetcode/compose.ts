// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x) {
        for (let i = functions.length - 1;  i >= 0; i--) {
            x = functions[i](x)
        }
        return x
    }
};

// Time:  O(n)
// Space: O(1)

type F = (x: number) => number;

function compose(functions: F[]): F {
    return (x: number) => functions.reduceRight((total: number, f: F) => f(total), x);
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
