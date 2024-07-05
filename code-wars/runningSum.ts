function runningSum (arg: number[]) {
    const result: number[] = []
    result[0] = arg[0]
    for(let i = 1; i < arg.length; i++) {
        result[i] = result[i-1] + arg[i]
    }
    return result

}
console.log(runningSum([1,2,3])) // --> [ 1, 3, 6 ]

