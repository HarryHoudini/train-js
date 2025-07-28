
// charFrequency('wrrrrr')


function charFrequency(str: string) {
 return Array.prototype.reduce.call(str, (acc, char) => {
    console.log(acc)
    acc[char] = (acc[char] || 0) + 1
    return acc;
  }, {});

}

console.log(charFrequency('wrrrrr') )
