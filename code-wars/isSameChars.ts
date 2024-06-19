function isSameChars(str: string, comparedString: string ) {
    return str.length === comparedString.length && str.split('').every((val, i)=> val === comparedString[i])
}

console.log(isSameChars('aas', 'aass'))
