function numberToPhone(phoneArr: number[]) {
    return phoneArr.reduce((pattern, char) => pattern.replace("x", char.toString()), "(xxx) xxx-xxxx");
}


console.log(numberToPhone([1,2,3,4,5,6,7,8,9,0]))
