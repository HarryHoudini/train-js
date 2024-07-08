// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (current) => {
            if (val === current) {
                return true
            }
            if (val !== current) {
                throw new Error("Not Equal")
            }
        }

    const notToBe = (current) => {
            if (val !== current) {
                return true
            }
            if (val === current) {
                throw new Error("Equal")
            }
        }

    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
