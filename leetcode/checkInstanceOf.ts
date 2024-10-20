//#2618
// https://leetcode.com/problems/check-if-object-instance-of-class/description/


function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj === null || obj === undefined) return false;
    if (Object(classFunction) !== classFunction) return false;
    if (typeof classFunction === 'object' && Object.keys(classFunction).length === 0) return false;
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// () => checkIfInstanceOf(5, Number)
// () => checkIfInstanceOf([], [])

// () => checkIfInstanceOf([], undefined)
// () => checkIfInstanceOf(null, [])


// const isPrimitive = (val) => Object(val) !== val;
// isPrimitive(null); // true
// isPrimitive(undefined); // true
// isPrimitive(50); // true
// isPrimitive("Hello!"); // true
// isPrimitive(false); // true
// isPrimitive(Symbol()); // true
// isPrimitive([]); // false
// isPrimitive({}); // false
