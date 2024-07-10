interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
    groupBy1(fn: (item: T) => string): Record<string, T[]>
    groupBy2(fn: (item: T) => string): Record<string, T[]>
    groupBy3(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, el)=> {
        let val = fn(el)
        if(acc[val]) acc[val].push(el);
        else acc[val] = [el]

        return acc;
    }, {})
}

Array.prototype.groupBy = function(fn) {
    const acc = {}
    for ( const el of this ) {
        const temp = fn(el);
        if (acc[temp]) {
            acc[temp].push(el)
        }
        else {
            acc[temp] = [el]
        }
    }
    return acc
}

Array.prototype.groupBy3 = function(fn) {
    const acc = {}
    for (let i = 0; i < this.length; i++) {
        const el = this[i]
        const temp = fn(this[i]);
        if (acc[temp]) {
            acc[temp].push(el)
        }
        else {
            acc[temp] = [el]
        }
    }
    return acc
}


// Slow!!!
Array.prototype.groupBy1 = function(fn) {
    const acc = {}
    for(let i=0; i < this.length; i++) {
        const key = fn(this[i])
        acc[key] = [...(acc[key] || []), this[i]]
    }
    return acc
}

// Slow!!
Array.prototype.groupBy2 = function(fn) {
    return this.reduce((acc, cur)=> {
         const key = fn(cur)
         console.log(acc[key])
         console.log(cur)
         acc[key] = [...(acc[key] || []), cur]
         return acc
     }, {})
 }

 /**
  * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
  */


//  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const fn = function (n) {
//    return String(n > 5);
//  }
//  console.log(array.groupBy1(fn))
