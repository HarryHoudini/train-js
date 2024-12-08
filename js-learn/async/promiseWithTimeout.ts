// Задача 6: Промис с тайм-аутом
// Создайте функцию promiseWithTimeout(promise, timeout), которая принимает промис и время ожидания в миллисекундах.
// Если промис не резолвится в течение заданного времени, функция должна отклонить промис с сообщением "Тайм-аут".



function promiseWithTimeout(promise: Promise<void>, timeout: number) {
   return new Promise((resolve, reject)=> {
        const timeOutId = setTimeout(()=> { reject(), console.log("Тайм-аут")}, timeout)
         promise.then((res)=> {resolve(res), clearTimeout(timeOutId)}).catch((err)=>{reject(err), clearTimeout(timeOutId)})
})}
