// Этот код создает функцию countdown, которая запускает таймер с обратным отсчетом на заданное количество секунд.
// Каждую секунду обновляется оставшееся время, и когда оно достигает нуля, выводится сообщение "Время вышло!".
function countdown(seconds) {
    let interval = setInterval(function() {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        // Форматирование времени в формате MM:SS
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }

        console.log(minutes + ":" + remainingSeconds);

        if (seconds === 0) {
            console.log("Время вышло!");
            clearInterval(interval);
        } else {
            seconds--;
        }
    }, 1000);
}

// Пример использования функции:
countdown(10);  // Отсчет начнется с 10 секунд


// Note: please restart the page if syntax highlighting works bad.
function runByTimes(count: number) {
    let counter = count

    setTimeout(function run() {
        if (counter === 0 ) {
           console.log('Timer is over')
           return
        } else {
            console.log(counter)
            counter--
         }
        setTimeout(run, 1000)
    }, 1000)

}

runByTimes(5)
