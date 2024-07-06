

function createCounter(n: number): () => number {

    return function() {
        return n++
    }
}

const f = createCounter(10)
console.log(f()) // 10
console.log(f()) // 11
console.log(f()) // 12
