import { time } from "console";
import { run } from "node:test";

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

    function runTimer(count:number=0) {
        if (count < times) {
            console.log("Таймер завершен");
        }
        setTimeout(()=> runTimer(count++), interval);

    }
    runTimer();
}

repeatingTimer2("Привет", 1000, 5);

