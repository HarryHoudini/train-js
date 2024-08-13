// Задача 8: Ретрай промиса
// Создайте функцию retryPromise(promiseFunction, retries, delay), которая принимает функцию, возвращающую промис,
// количество попыток и задержку между попытками.
// Функция должна повторять выполнение промиса указанное количество раз с заданной задержкой между попытками, если промис отклоняется.

async function retryPromise(promiseFunction: () => Promise<void>, retries: number, delay: number) {
   const timeout = (millis: number)=> new Promise((res)=> setTimeout(res, millis))
    while(retries) {
        retries--
        await promiseFunction()
        timeout(delay)
    }
}

// const unreliableFunction = () => new Promise((resolve, reject) => Math.random() > 0.5 ? resolve("Успех") : reject("Ошибка"));
// retryPromise(unreliableFunction, 3, 1000).then(result => console.log(result)).catch(error => console.log(error));
// // Попробует выполнить unreliableFunction до 3 раз с задержкой 1 секунду между попытками
