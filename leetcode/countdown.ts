function countdown(seconds: number) {
    let count = 0
    const timeoutId = setTimeout(function run() {
        if (count === seconds) {
            clearTimeout(timeoutId)
            console.log("Время вышло!")
            return
        }
        console.log(count)
        count++
        setTimeout(run, count)
    }, 0)
}

countdown(5); // Выводит 5, 4, 3, 2, 1, "Время вышло!"
