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

async function parallelRunWithLimit<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
  const results: T[] = new Array(tasks.length).fill(null);
  const tasksQueue = tasks.map((task, index) => ({ task, index }));

  const workers = new Array(concurrency).fill(null).map(async () => {
    while (tasks.length > 0) {
      const { task, index } = tasksQueue.shift()!;
      results[index] = await task();
    }
  });

  await Promise.all(workers);
  return results;
}
(async () => {
  const results = await parallelRunWithLimit(tasksToDo, 2);
  console.log(results);
})();
