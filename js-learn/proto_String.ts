const o = {}
console.log(o.toString()) //
console.log(o.toString === Object.prototype.toString) // true

const arr = [1,2,3]
console.log(arr.toString)
console.log(arr.__proto__.toString === Array.prototype.toString)
