const increment = (value) => {
    console.log("Функция  increment вызвана");
    return value + 1;
};

const memoz = (originalFn) => {
    const result = new Map();

    return (value) => {
        if (!result.has(value)) {
            result.set(value, originalFn(value));
        }
        return result.get(value);
    };
};

const memoizedIncrement = memoz(increment)

console.log(memoizedIncrement(1))
console.log(memoizedIncrement(2))
console.log(memoizedIncrement(2))
console.log(memoizedIncrement(3))
