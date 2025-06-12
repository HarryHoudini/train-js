function isAnagram(str1: string, str2: string): boolean {
    const dictionary: Record<string, number> = {}
    const dictionary2: Record<string, number>  = {}


    if (str1.length !== str2.length) {
        return false
    }

    for (let i=0, len=str1.length; len > i; i++) {
        const tem1 = str1[i]
        const tem2 = str2[i]
        dictionary[tem1] = (dictionary[tem1] || 0) + 1
        dictionary2[tem2] = (dictionary[tem2] || 0) + 1
    }

    for (const char in dictionary) {
        if (dictionary[char] !== dictionary2[char]) {
            return false
        }
    }

    return true
}
