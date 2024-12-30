/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
const MIN_VALUE = 1;
const MAX_VALUE = 10;

let b = MIN_VALUE;
let factorial = 1;

while (b<=MAX_VALUE) {
  factorial = factorial * b;
  b++;
}
console.log(factorial);
