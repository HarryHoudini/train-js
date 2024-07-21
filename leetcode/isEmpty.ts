// https://leetcode.com/problems/is-object-empty/?envType=study-plan-v2&envId=30-days-of-javascript
// 2727. Is Object Empty
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {

  if (obj == null) {
    return true;
  }

  if (typeof obj !== 'object') {
    return true;
  }

  if (Array.isArray(obj) && obj.length > 0) {
    return false;
  }
  // consider `Object.create(null)`, commonly used as a safe map
  // before `Map` support, an empty object as well as `{}`

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
};


function isEmpty2(obj: Obj): boolean {
    for(let key in obj) {
        return false
    }
    return true
};
