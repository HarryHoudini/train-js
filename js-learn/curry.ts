// https://learn.javascript.ru/currying-partials

functions sum (a, b, c) {
  return a + b + c;
}

const curriedFunction = curried(sum);
console.log(curriedFunction(1)(2)(3)); // 6
console.log(curriedFunction(1, 2)(3)); // 6
console.log(curriedFunction(1)(2, 3)); // 6


function curry (func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function pass (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
