// 2703. Return Length of Arguments Passed
// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    // return Array.prototype.slice.call(args).length
    // const argArr = []
    // for (let i=0; i < args.length; i++) {
    //     argArr[i] = args[i]
    // }
    // return argArr.length
    return args.length
};
