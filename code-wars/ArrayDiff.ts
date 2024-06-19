const a = []
const b = [3]

function diff(a: number[], b: number[] ) {
    return a.filter((val)=> !b.includes(val))
}

console.log(diff(a, b))
