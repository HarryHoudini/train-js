//https://leetcode.com/problems/first-letter-to-appear-twice/description/

function repeatedCharacter(s: string): string {
    const map = {}
    for (let i = 0, len = s.length; i < len; i++) {
        const curr = s[i];
        map[curr] = (map[curr] || 0) + 1
        if (map[curr] == 2) return curr
    }
};


function repeatedCharacter2(s: string): string {
    const charSet = new Set()
    for (let i = 0, len = s.length; i < len; i++) {
       if (charSet.has(s[i])) {
            return s[i]
       }
       charSet.add(s[i])
    }
};
