type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
   let count=0
    return function (...args) {
        return count > 0 ? undefined : (count++,fn(...args))
    };
}


function once2(fn: Function): OnceFn {
    let isCalled = false;

    return function (...args) {
        if (isCalled) return;

        isCalled = true;
        return fn(...args)
    };
}
