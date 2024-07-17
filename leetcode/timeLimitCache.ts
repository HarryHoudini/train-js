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

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
