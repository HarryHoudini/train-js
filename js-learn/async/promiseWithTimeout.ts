// Задача 6: Промис с тайм-аутом
// Создайте функцию promiseWithTimeout(promise, timeout), которая принимает промис и время ожидания в миллисекундах.
// Если промис не резолвится в течение заданного времени, функция должна отклонить промис с сообщением "Тайм-аут".



function promiseWithTimeout(promise: Promise<void>, timeout: number) {
   return new Promise((resolve, reject)=> {
        const timeoutId = setTimeout(()=> {
            console.log('Timer is over')
            reject()
        })
        promise.then((val)=> {
            clearTimeout(timeoutId)
            resolve(val)
        })
    })


}
