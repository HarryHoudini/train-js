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

function isPalindrome2(str: string) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if(str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("tat"));
console.log(fastestFloor("atata"));
console.log(isPalindrome2("atata"));
