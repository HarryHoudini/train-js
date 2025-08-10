function removeDigit(number: string, digit: string): string {
    const candidates = []
    const len = number.length
    for (let i=0; i < len; i++) {
        const temp = number[i];
        if (temp === digit) {
            const n = number.slice(0, i) + number.slice(i+1, len)
            candidates.push(BigInt(n))
        }
    }
    let max = 0;
    for (const big of candidates) {
        if (big > max) {
            max = big
        }
    }

    return String(max)
}

function removeDigit(number: string, digit: string): string {
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === digit && number[i + 1] > digit) {
            return number.slice(0, i) + number.slice(i + 1);
        }
    }
    // If no better option, remove last occurrence
    const lastIndex = number.lastIndexOf(digit);
    return number.slice(0, lastIndex) + number.slice(lastIndex + 1);
}


