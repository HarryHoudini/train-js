function isPalindrome(text: String) {
    return text === text.split("").reverse().join("");
}

function fastestFloor(str: String) {
    const halfLength = Math.floor(str.length / 2);
    for (let i = 0; i < halfLength; i++) {
        const backIndex = str.length - 1;
        return str[i] === str[backIndex-i];
    }
}

console.log(isPalindrome("tat"));
console.log(fastestFloor("atata"));
