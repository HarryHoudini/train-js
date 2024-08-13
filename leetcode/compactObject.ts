// https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  function dfs(obj: any): any {
    if (!obj) return false
    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
        const newArr: any[] = []
        for(let i = 0; i < obj.length; i++) {
            const cur = obj[i]
            const sub = dfs(cur)
            if (sub) {
                newArr.push(sub)
            }
        }
        return newArr
    }

    const temObj: Obj = {}

    for (const key in obj) {
        const subRes = dfs(obj[key])
        if (subRes) {
            temObj[key] = subRes
        }
    }
    return temObj
  }

    const res = dfs(obj)

    return res
};


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    const stack = [obj];

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            const len = item.length;

            for (let i = 0; i < len; i++) {
                const v = item[i]

                if (v) {
                    item.push(v)

                    if (typeof v === 'object') stack.push(v)
                }
            }
            item.splice(0,len);
        } else {
            for (const k in item) {
                const v = item[k]

                if (!v) {
                    delete item[k];
                } else if (typeof v === 'object') {
                    stack.push(v);
                }
            }
        }
    }
    return obj;
};
