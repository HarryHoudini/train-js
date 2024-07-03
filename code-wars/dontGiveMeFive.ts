//https://www.codewars.com/kata/5813d19765d81c592200001a/solutions/typescript

export function my_dontGiveMeFive(start:number, end:number) : number
{
  const arr = []
  for (let i = start; i <= end; i++) {
    if(i.toString().includes('5')) {
      continue;
    }
    arr.push(i)
  }
  return arr.length;
}


export function dontGiveMeFive(start:number, end:number) : number {
    var count = 0;
    for (var i=start; i<=end; i++) {
      if (!String(i).match(/5/)) {
        count++;
      }
    }
    return count;
  }

export const dontGiveMeFive1 = (start: number, end: number) =>
    [...Array(end - start + 1)].map((cur, i) => start + i)
  .filter(cur => !cur.toString().includes("5")).length;

