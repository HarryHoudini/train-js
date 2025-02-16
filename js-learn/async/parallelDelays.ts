// Задача 5: Параллельные задержки
// Создайте функцию parallelDelays(messages, delays), которая принимает массив сообщений и массив соответствующих задержек в миллисекундах.
// Функция должна возвращать промис, который резолвится, когда все сообщения были выведены с указанными задержками.

async function parallelDelays(messages: string[],  delays: number[]) {
    return new Promise((mainResolve) => {
         let promiseCounter = 0
         messages.forEach(async (message, i)=> {
             new Promise ((resolve)=> {
                 setTimeout(()=> (console.log(message), resolve(1)), delays[i])
             }).then((val)=> {
                 console.log(promiseCounter)
                 // console.log(i)
                 promiseCounter++
                     if (messages.length  === promiseCounter) {
                         console.log('Job is finished')
                         mainResolve(1)
                     }
             })
         })
     })
  }

 async function parallelDelays1(messages: string[],  delays: number[]) {
    return new Promise((mainResolve) => {
         messages.forEach(async (message, i)=> {
             new Promise ((resolve)=> {
                 setTimeout(()=> (console.log(message), resolve(1)), delays[i])
             }).then((val)=> {
                     if (messages.length - 1  === i) {
                         console.log('Job is finished')
                         mainResolve(1)
                     }
             })
         })
     })
}


parallelDelays(["Первое", "Второе", "Третье"], [1000, 2000, 3000]).then(() => console.log("Все сообщения выведены"));
// Выводит "Первое" через 1 секунду, "Второе" через 2 секунды и "Третье" через 3 секунды
