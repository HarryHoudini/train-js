import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

interface Task {
  payload: any;
  resolve: (value: any) => void;
  reject: (error: any) => void;
}

export class WorkerPool {
  private workers: Worker[] = [];
  private free: Worker[] = [];
  private queue: Task[] = [];

  constructor(workerFile: string, size: number = os.cpus().length) {
    const fullPath = path.resolve(workerFile);
    for (let i = 0; i < size; i++) {
      const w = new Worker(fullPath);
      w.on('message', msg => this.onMessage(w, msg));
      w.on('error', err => console.error('Worker error', err));
      this.workers.push(w);
      this.free.push(w);
    }
  }

  exec<T>(payload: any): Promise<T> {
    return new Promise((resolve, reject) => {
      const task: Task = {
      payload,
      resolve: (msg: any) => {
        if (msg.error) reject(new Error(msg.error));
        else resolve(msg.result);
      },
      reject
    };
      if (this.free.length > 0) {
        const w = this.free.pop()!;
        (w as any).currentTask = task;
        w.postMessage(payload);
      } else {
        this.queue.push(task);
      }
    });
  }

  private onMessage(worker: Worker, result: any) {
    const task: Task = (worker as any).currentTask;
    task.resolve(result);
    delete (worker as any).currentTask;
    if (this.queue.length > 0) {
      const next = this.queue.shift()!;
      (worker as any).currentTask = next;
      worker.postMessage(next.payload);
    } else {
      this.free.push(worker);
    }
  }

  close() {
    for (const w of this.workers) w.terminate();
  }
}
