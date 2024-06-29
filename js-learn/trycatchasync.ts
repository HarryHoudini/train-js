const parseApple = () => {
        new Promise((resolve, reject) => {
            console.log(1);
            const cb = function () {
                console.log(2);
                try {
                    resolve(JSON.parse("s"));
                } catch (err) {
                    console.log("very bad error: ");
                }
            };
            setTimeout(cb, 0);
        });
    console.log(3);
};

parseApple();

// https://learn.javascript.ru/promise-error-handling
// Ответ: нет, не выполнится:

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
// Как было сказано в главе, здесь присутствует "скрытый try..catch" вокруг кода функции. Поэтому обрабатываются все синхронные ошибки.

// В данном примере ошибка генерируется не по ходу выполнения кода, а позже. Поэтому промис не может обработать её.
