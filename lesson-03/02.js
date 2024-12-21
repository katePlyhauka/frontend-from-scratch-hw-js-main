// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {
    let getResult
    if (a%2!=0) {
        getResult = false
    }
    else {
        getResult = true
    }
    return getResult
}

console.log(isEven(40));
 
