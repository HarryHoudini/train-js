function isPalindrome(text: string) {
    return text === text.split("").reverse().join("");
}

function fastestFloor(str: string) {
  const halfLength = Math.floor(str.length / 2);
  for (let i = 0; i < halfLength; i++ ) {
    const backIndex = str.length - 1;
    if ( str[i] !== str[backIndex - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("tat"));
console.log(fastestFloor("atata"));
