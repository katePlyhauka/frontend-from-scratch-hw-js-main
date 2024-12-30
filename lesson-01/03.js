/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const MIN_VALUE = 1;
const MAX_VALUE = 20;
let c = MIN_VALUE;
let sum = 0;

while (c<=MAX_VALUE) {
    if (c % 2 !==0) {
    sum=sum+c;
    c=c+2;}
}
console.log(sum);
