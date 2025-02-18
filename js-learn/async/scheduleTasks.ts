// Requirements
// Each task has a runAt: Date timestamp. It should execute exactly at or after that time.
// Use setTimeout to delay execution until the correct time.
// Return results in the order of execution, not in the order they were given.
// The function should return a Promise<T[]> that resolves when all tasks are done.
// (Bonus): Handle cases where runAt is in the past (execute immediately).



const now = new Date();
const _tasks = [
  { run: () => Promise.resolve("Task A"), runAt: new Date(now.getTime() + 2000) }, // Runs in 2s
  { run: () => Promise.resolve("Task B"), runAt: new Date(now.getTime() + 1000) }, // Runs in 1s
  { run: () => Promise.resolve("Task C"), runAt: new Date(now.getTime() + 3000) }, // Runs in 3s
];

const results =  await scheduleTasks(_tasks);
console.log(results);
// Expected Output (after ~3s, in order of execution time):
// ["Task B", "Task A", "Task C"]

async function scheduleTasks(tasks) {
  const resultsArray = []
  return new Promise((mainResolve, rej) => {
    tasks.forEach(({ run, runAt }, i) => {
        new Promise((res, rej) => {
          setTimeout(async () => {
            const a = await run();
            res(a);
            }, runAt.getTime() - new Date().getTime())
        }).then((val)=> {
            resultsArray[i] = val
            if(resultsArray.length === tasks.length) {
                mainResolve (resultsArray)
            }
         })
      })
  })
}

async function scheduleTasks1(tasks) {
  return new Promise((resolve, reject) => {
      const resultArray = new Array(tasks.length).fill(null)
      let counter = 0
      tasks.forEach(({run, runAt}, i)=> {
        const delay = Math.max(runAt.getTime() - Date.now(), 0)
        setTimeout(async () => {
          try {
            const taskResult = await run()
            resultArray[i] = taskResult
          } catch {
            resultArray[i] = 'Fail'
          }
          counter++
          if( counter > tasks.length-1) {
            resolve(resultArray)
          }
        }, delay)
      })
  })
}
