function repeatingTimer(message: string, interval: number, times: number) {
   const intervalId = setInterval(()=> {
    times--
    if(times === 0) {
        clearInterval(intervalId)
    }
    console.log(message)
   }, interval)
}


function repeatingTimer2(message: string, interval: number, times: number) {

    function runTimer(count: number) {
        if (count < times) {
            console.log(message)
            setTimeout( ()=> runTimer(count + 1), interval)
        }
    }
    runTimer(0)
}

repeatingTimer2("Привет", 1000, 5);

