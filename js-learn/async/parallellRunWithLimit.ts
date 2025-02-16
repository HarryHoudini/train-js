// https://chatgpt.com/c/67a27b9c-292c-8010-a7a4-4a51b59ef025

// Challenge: Asynchronous Queue Processor
// You need to implement a function that processes tasks from a queue asynchronously.

// Requirements:
// The function should accept an array of async tasks (functions that return Promises).
// It should process a given number of tasks in parallel (concurrency limit).
// Once a task completes, start the next one until all tasks are processed.
// Return an array of results in the same order as the input tasks.


// Note: please restart the page if syntax highlighting works bad.
console.log('start program');
const delay = (ms: number) =>
  new Promise((resolve, _) => {
    setTimeout(resolve, ms);
  });

const tasksToDo = [
  () => delay(1000).then(() => 'Task 1'),
  () => delay(500).then(() => 'Task 2'),
  () => delay(300).then(() => 'Task 3'),
  () => delay(700).then(() => 'Task 4'),
  () => delay(200).then(() => 'Task 5'),
];

async function processQueue<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  const workers = new Array(concurrency).fill(null).map(async () => {
    while (index < tasks.length) {
      const taskIndex = index++; // Assign a unique index to preserve order
      results[taskIndex] = await tasks[taskIndex]();
    }
  });

  await Promise.all(workers);
  return results;
}
(async () => {
  const results = await processQueue(tasksToDo, 2);
  console.log(results);
})();
