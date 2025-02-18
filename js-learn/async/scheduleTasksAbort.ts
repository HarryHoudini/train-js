// Requirements
// Each task has a runAt: Date timestamp. It should execute exactly at or after that time.
// Use setTimeout to delay execution until the correct time.
// Return results in the order of execution, not in the order they were given.
// The function should return a Promise<T[]> that resolves when all tasks are done.
// (Bonus): Handle cases where runAt is in the past (execute immediately).


const controller = new AbortController();
const signal = controller.signal;
const now = new Date();
const _tasks = [
  { run: () => new Promise(res => setTimeout(() => res("Task A"), 1000)), runAt: new Date(now.getTime() + 1000) },
  { run: () => Promise.resolve("Task B"), runAt: new Date(now.getTime() + 2000) },
  { run: () => Promise.resolve("Task C"), runAt: new Date(now.getTime() + 4000) },
  { run: () => Promise.reject(), runAt: new Date(now.getTime() + 1000) },
];

setTimeout(() => controller.abort(), 2500); // Abort before Task B starts

// 1.If signal.aborted, cancel all tasks before they start.
// 2. If signal.abort() is called after some tasks have started, cancel any remaining pending tasks

const results =   await scheduleTasksAbort(_tasks, signal).then(console.log);
console.log(results);
// Expected Output (after ~3s, in order of execution time):
// ["Task B", "Task A", "Task C"]

async function scheduleTasksAbort(tasks, signal) {
  return new Promise((resolve, reject) => {
     if (signal.aborted) {
      return resolve([]); // If aborted before running, return empty array
    }

    const resultArray = new Array(tasks.length).fill(null);
    let counter = 0;
    const timersId = new Map();

    const abortHandler = () => {
        for (const timerId of timersId.values()) {
          clearTimeout(timerId); // Stop any pending task before it runs
        }
        resolve(resultArray); // Return an empty array when aborted
    };
    signal.addEventListener('abort', abortHandler, {once: true})

    tasks.forEach(({run, runAt}, i)=> {
    const delay = Math.max(runAt.getTime() - Date.now(), 0)

    const timerId = setTimeout(async () => {
        if (signal.aborted) return
        try {
            const taskResult = await run()
            resultArray[i] = taskResult
        } catch {
            resultArray[i] = 'Fail'
        }
        counter++
        if (counter > tasks.length - 1) {
            resolve(resultArray)
        }
    }, delay)
    timersId.set(timerId, i)
    })
  })
}

export { };
