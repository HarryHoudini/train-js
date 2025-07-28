// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    const map = {'[': ']', '(': ')', '{': '}'}
    const stack = []

   for (const char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(map[char])
            continue
        }
        if (char !== stack.pop()) {
            return false
        }
   }

    return !stack.length
}
