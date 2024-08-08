async function delayedMessage(message, delay) {
   await new Promise((resolve)=> setTimeout(()=> {
    console.log(message)
    resolve(message)}, delay))
}

delayedMessage("Привет, мир!", 2000).then((msg) => console.log(msg)); // Выводит "Привет, мир!" через 2 секунды
