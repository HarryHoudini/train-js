Function.prototype.defer = function (ms) {
    return  (...arg)=> {
        setTimeout(this, ms, ...arg);
    };
};

function f(a, b) {
    console.log(a + b);
}

f.defer(3 * 1000)(1, 92);

// console.log(f.defer(3 * 1000)(1, 22))
