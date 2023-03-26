function duplicateEncode(word: string) {
    return word.toLocaleLowerCase()
        .split("")
        .map((orgVal, _, orgArr) => (orgArr.filter((val) => orgVal === val).length === 1 ? "(" : ")"))
        .join("");
}

console.log(duplicateEncode("recede"));
