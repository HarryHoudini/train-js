import { parentPort } from 'worker_threads';

function fibBig(n: number): bigint {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

parentPort!.on('message', (n: number) => {
  try {
    // turn the BigInt into a decimal string
    const resultStr = fibBig(n).toString();
    parentPort!.postMessage({ result: resultStr });
  } catch (err) {
    // if anything goes wrong, let the main thread know
    parentPort!.postMessage({ error: (err as Error).message });
  }
});
