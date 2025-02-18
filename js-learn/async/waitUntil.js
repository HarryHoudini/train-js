// Note: please restart the page if syntax highlighting works bad.
console.log('start program')
const delay = (ms) => new Promise((resolve, _) => {
  setTimeout(resolve, ms)
});

(async function fetchData() {
  await delay(1000)
  console.log('Some object returned')
})()

async function doubleNumbers(n, ms=5000) {
  const ramdom = Math.floor(Math.random() * ms)
   await delay(ramdom)
  return n * 2
}

(async function sequntalPromises(numbers = [1,2,3]){
 const result = await Promise.all(numbers.map((val)=> doubleNumbers(val)))
 console.log(result)
})()

(async function waitUntil(msDelay = 1000){
  const startTime = Date.now() + msDelay;
  console.log(startTime)
  while ( Date.now() < startTime) {
        await delay(200)
        console.log('end')
      }
})()
