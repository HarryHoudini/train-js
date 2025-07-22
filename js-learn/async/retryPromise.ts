// Задача 8: Ретрай промиса
// Создайте функцию retryPromise(promiseFunction, retries, delay), которая принимает функцию, возвращающую промис,
// количество попыток и задержку между попытками.
// Функция должна повторять выполнение промиса указанное количество раз с заданной задержкой между попытками, если промис отклоняется.

async function retryPromise(promiseFunction: () => Promise<void>, retries: number, delay: number) {
    const retry = (millis: number)=>new Promise((resolve)=> { setTimeout(resolve, millis)})
    while(retries > 0) {
        try {
            await promiseFunction();
            return;
        } catch (error) {
            retries--;
            if (retries === 0) {
                throw new Error(`Все попытки завершились неудачей: ${error}`);
            }
            console.log(`Попытка не удалась, осталось попыток: ${retries}. Повтор через ${delay} мс...`);
            await retry(delay);
        }
    }
}

// const unreliableFunction = () => new Promise((resolve, reject) => Math.random() > 0.5 ? resolve("Успех") : reject("Ошибка"));
// retryPromise(unreliableFunction, 3, 1000).then(result => console.log(result)).catch(error => console.log(error));
// // Попробует выполнить unreliableFunction до 3 раз с задержкой 1 секунду между попытками
