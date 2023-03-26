function makeCounter() {
    // вместо
    // let count = 0

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  const makeExpressionFunction = () => {
        const counter = () => {return counter.count++}
        counter.count = 0;
        return counter;
  }

  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ) // 1
  let counterExpression = makeExpressionFunction();
  console.log( counterExpression() ); // 0
  console.log( counterExpression().counter ) // 1

//   Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.


  function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
  }
