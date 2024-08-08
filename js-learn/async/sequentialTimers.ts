async function sequentialTimers(intervals: number[]) {
    const delay = (delayMs: number) => new Promise((resolve)=> {
      setTimeout(resolve, delayMs)
    })

    // intervals.forEach(async (interval, i)=> {
    //   await delay(interval)
    //   console.log(`"Таймер ${i} завершен через ${interval} мс"`)
    // })
    let i = 0
    for (const interval of intervals) {
      i++
      await delay(interval)
      console.log(`"Таймер ${i} завершен через ${interval} мс"`);
    }

  }
  sequentialTimers([1000, 20, 3000]);
  // Выводит:
  // "Таймер 1 завершен через 1000 мс"
  // "Таймер 2 завершен через 2000 мс"
  // "Таймер 3 завершен через 3000 мс"

  async function sequentialTimers2(intervals: number[]) {
    let totalInterval = 0

    intervals.forEach((interval, i)=> {
        totalInterval += interval

        setTimeout(() => {
            console.log(`"Таймер ${i} завершен через ${interval} мс"`);
        }, (totalInterval));
    })
  }

  sequentialTimers2([1000, 20, 3000]);
