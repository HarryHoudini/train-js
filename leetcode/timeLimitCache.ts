// https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
// 2622. Cache With Time Limit
class TimeLimitedCache {
    cacheMap:  Record<number, {timeoutId: any;  value: number}> = []

    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        if (this.cacheMap[key]?.timeoutId) { clearTimeout(this.cacheMap[key].timeoutId) }
        const isRewrite = Boolean(this.cacheMap[key])
        this.cacheMap[key] = {...this.cacheMap[key], value}
        this.cacheMap[key].timeoutId = setTimeout(() => {
            this.cacheMap[key].value = -1
            clearTimeout(this.cacheMap[key].timeoutId)
        }, duration)
        return isRewrite
    }

    get(key: number): number {
        return this.cacheMap?.[key]?.value ?? -1
    }

    count(): number {
        return  Object.values(this.cacheMap).filter((val) => val.value !== -1).length
    }
}

const TimeLimitedCache2 = function() {
    this.cache = new Map();  // Using Map so we don't need a size variable
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
    this.cache.set(key, {
        value,  // Equivalent to `value: value`
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

class TimeLimitedCache3 {
    #cache: Map<number, [value: number, expire: number]> = new Map();

    set(key: number, value: number, duration: number): boolean {
        const isExist = this.#cache.has(key);

        if (!this.#isExpired(key)) {
            this.#cache.set(key, [value, Date.now() + duration]);
        }

        return isExist;
    }

    get(key: number): number {
        if (this.#isExpired(key)) return -1;
        const res = this.#cache.get(key)?.[0] ?? -1;
        return res;
    }

    count(): number {
        const xs = Array.from(this.#cache).filter(([key]) => !this.#isExpired(key));
        return xs.length;
    }

    #isExpired = (key: number) =>
        this.#cache.has(key) &&
        (this.#cache.get(key)?.[1] ?? Number.NEGATIVE_INFINITY) < Date.now();
}
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
