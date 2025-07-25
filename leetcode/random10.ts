// 470 Implement Rand10() Using Rand7()
// https://leetcode.com/problems/implement-rand10-using-rand7/

/**
 * Предполагается, что rand7() уже реализована и возвращает
 * равномерное целое число от 1 до 7.
 */
declare function rand7(): number;

/**
 * Генерирует равномерное целое число от 1 до 10, минимизируя
 * ожидаемое число вызовов rand7() за счёт повторного использования
 * «остаточных» значений.
 */
function rand10(): number {
  while (true) {
    // Фаза 1: получаем idx ∈ [1..49]
    const a = rand7();
    const b = rand7();
    const idx = (a - 1) * 7 + b; // 1..49

    // Если в [1..40], сразу маппим в [1..10]
    if (idx <= 40) {
      return 1 + ((idx - 1) % 10);
    }

    // Фаза 2: используем «остаток» idx ∈ [41..49] → c ∈ [1..9]
    // и ещё один вызов rand7() для получения uniform [1..63]
    const c = idx - 40;      // 1..9
    const d = rand7();       // 1..7
    const idx2 = (c - 1) * 7 + d; // 1..63

    // Принимаем, если в [1..60]
    if (idx2 <= 60) {
      return 1 + ((idx2 - 1) % 10);
    }
    // Иначе (idx2 ∈ [61..63]) — полный откат, цикл повторяется
  }
}


/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
    while (true) {
        const num = (rand7() - 1) * 7 + rand7();
        if (num <= 40) return 1 + (num - 1) % 10;
    }
};
