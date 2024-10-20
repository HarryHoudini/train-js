//#2618
// https://leetcode.com/problems/check-if-object-instance-of-class/description/


function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (Object(classFunction) !== classFunction || obj === null || obj === undefined) return false
    if (typeof classFunction === 'object' && Object.keys(classFunction).length === 0) return false;
    return Object(obj) instanceof classFunction
};


/**
 * checkIfInstanceOf(new Date(), Date); // true
 */


// () => checkIfInstanceOf(5, Number)
// () => checkIfInstanceOf([], [])

// () => checkIfInstanceOf([], undefined)
// () => checkIfInstanceOf(null, [])
